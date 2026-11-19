import http.server
import socketserver
import os
import sys
import re
import urllib.parse
from http import HTTPStatus

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8000

class SPAHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Accept-Ranges', 'bytes')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

    def translate_path(self, path):
        clean_path = path.split('?', 1)[0].split('#', 1)[0]
        real_path = super().translate_path(clean_path)
        if os.path.isdir(real_path):
            index = os.path.join(real_path, "index.html")
            if os.path.exists(index):
                return index
        if not os.path.exists(real_path) and '.' not in os.path.basename(clean_path):
            return super().translate_path('/index.html')
        return real_path

    def send_head(self):
        """Common code for GET and HEAD commands with full RFC 7233 byte-range support."""
        path = self.translate_path(self.path)
        if os.path.isdir(path):
            parts = urllib.parse.urlsplit(self.path)
            if not parts.path.endswith('/'):
                self.send_response(HTTPStatus.MOVED_PERMANENTLY)
                new_parts = (parts[0], parts[1], parts[2] + '/', parts[3], parts[4])
                new_url = urllib.parse.urlunsplit(new_parts)
                self.send_header("Location", new_url)
                self.end_headers()
                return None
            for index in "index.html", "index.htm":
                index_path = os.path.join(path, index)
                if os.path.exists(index_path):
                    path = index_path
                    break
            else:
                return self.list_directory(path)

        ctype = self.guess_type(path)
        try:
            f = open(path, 'rb')
        except OSError:
            self.send_error(HTTPStatus.NOT_FOUND, "File not found")
            return None

        try:
            fs = os.fstat(f.fileno())
            total_size = fs.st_size

            range_header = self.headers.get('Range')
            if range_header:
                range_match = re.match(r'^bytes=(\d*)-(\d*)$', range_header.strip())
                if range_match:
                    start_str, end_str = range_match.groups()
                    if start_str and end_str:
                        start = int(start_str)
                        end = min(int(end_str), total_size - 1)
                    elif start_str:
                        start = int(start_str)
                        end = total_size - 1
                    elif end_str:
                        suffix = int(end_str)
                        start = max(0, total_size - suffix)
                        end = total_size - 1
                    else:
                        start = 0
                        end = total_size - 1

                    if start > end or start >= total_size:
                        self.send_response(HTTPStatus.REQUESTED_RANGE_NOT_SATISFIABLE)
                        self.send_header('Content-Range', f'bytes */{total_size}')
                        self.end_headers()
                        f.close()
                        return None

                    length = end - start + 1
                    self.send_response(HTTPStatus.PARTIAL_CONTENT)
                    self.send_header("Content-type", ctype)
                    self.send_header("Content-Range", f"bytes {start}-{end}/{total_size}")
                    self.send_header("Content-Length", str(length))
                    self.send_header("Last-Modified", self.date_time_string(fs.st_mtime))
                    self.end_headers()

                    f.seek(start)
                    self._bytes_to_send = length
                    return f

            # Standard 200 OK response
            self.send_response(HTTPStatus.OK)
            self.send_header("Content-type", ctype)
            self.send_header("Content-Length", str(total_size))
            self.send_header("Last-Modified", self.date_time_string(fs.st_mtime))
            self.end_headers()
            self._bytes_to_send = total_size
            return f
        except Exception:
            f.close()
            raise

    def copyfile(self, source, outputfile):
        """Copy data from source to outputfile, strictly limiting to _bytes_to_send if set."""
        bytes_to_send = getattr(self, '_bytes_to_send', None)
        bufsize = 64 * 1024
        try:
            if bytes_to_send is None:
                super().copyfile(source, outputfile)
            else:
                remaining = bytes_to_send
                while remaining > 0:
                    chunk_size = min(bufsize, remaining)
                    data = source.read(chunk_size)
                    if not data:
                        break
                    outputfile.write(data)
                    remaining -= len(data)
        except (BrokenPipeError, ConnectionResetError):
            pass

class ThreadingTCPServer(socketserver.ThreadingMixIn, socketserver.TCPServer):
    daemon_threads = True
    allow_reuse_address = True
    request_queue_size = 128

if __name__ == '__main__':
    with ThreadingTCPServer(("", PORT), SPAHandler) as httpd:
        print(f"SPA Dev Server running at http://localhost:{PORT}")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            pass
