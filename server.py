import http.server
import socketserver
import os
import sys

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8000

class SPAHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

    def translate_path(self, path):
        real_path = super().translate_path(path)
        if not os.path.exists(real_path) and '.' not in os.path.basename(path):
            return super().translate_path('/index.html')
        return real_path

socketserver.TCPServer.allow_reuse_address = True
with socketserver.TCPServer(("", PORT), SPAHandler) as httpd:
    print(f"SPA Dev Server running at http://localhost:{PORT}")
    httpd.serve_forever()
