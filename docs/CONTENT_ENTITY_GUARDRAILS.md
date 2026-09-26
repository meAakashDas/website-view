# RisePaisa — Editorial & Entity Governance Guardrails

> **Authoritative Internal Protocol for Future Developers, Authors, and Editors**  
> *Last Updated: September 2026*

This document defines the permanent rules for content creation, technical SEO, entity relationships, and author attribution on the RisePaisa platform (`https://risepaisa.com`).

---

## 1. Core Entity Hierarchy (Immutable)

The brand and entity architecture must strictly preserve the following hierarchy across all pages, structured data, and external communications:

```text
                           RISEPAISA
                              │
                    Organization Entity (#organization)
                              │
             ┌────────────────┼─────────────────┐
             │                │                 │
          founder          publisher          website
             │                │                 │
             ↓                ↓                 ↓
        AAKASH DAS         Articles          RisePaisa
             │
        Person Entity (#person)
             │
       ┌─────┼─────────────┐
       ↓     ↓             ↓
   Profile  sameAs       worksFor
  /aakash-das Verified  RisePaisa
```

### Key Brand Rules
1. **RisePaisa is the Primary Brand:** The site must never be converted into a personal blog or personal portfolio. Page titles, logos, navigation, and footers must always lead with **RisePaisa**.
2. **Founder Relationship:** Aakash Das is the **Founder of RisePaisa | Finance Educator & Content Creator**. This relationship must be clear and contextually grounded without dominating the entire page experience.
3. **No Unsupported Titles:** Do NOT use titles such as CEO, Co-founder, CA, CFA, Investment Advisor, Licensed Financial Planner, or Portfolio Manager unless officially established and legally licensed.

---

## 2. Author Attribution Protocols

Whenever new articles, guides, or lessons are published on RisePaisa:

- **Attribution:** Only assign `author: "Aakash Das"` if Aakash Das genuinely authored or directly researched the piece. If another educator or guest writer authors content, credit their real name.
- **Publisher:** Every piece of content published on the platform must specify `publisher: "RisePaisa"` (`https://risepaisa.com/#organization`).
- **Profile Link:** When Aakash Das is the author, link the byline and author bio box to the single canonical profile:
  ```text
  /aakash-das
  ```
- **Author Box:** Use the standardized compact author card with the canonical portrait (`assets/images/aakash-das-founder-risepaisa.jpg`). Never duplicate lengthy biographical text inside article bodies.

---

## 3. Schema.org Structured Data Rules

1. **Central Source of Truth:** Never hardcode disconnected Person or Organization snippets. Import and utilize `ENTITY_RISEPAISA` and `ENTITY_AAKASH_DAS` from `js/data/entities.js`.
2. **Canonical Entity IDs:**
   - Person: `https://risepaisa.com/aakash-das#person`
   - Organization: `https://risepaisa.com/#organization`
   - WebSite: `https://risepaisa.com/#website`
3. **Restrained `knowsAbout`:** Only include core topic domains (*Financial education*, *Personal finance*, *Nepal Stock Exchange*, *Banking*, *Fintech*, *Taxation*). Do not keyword-stuff schema properties.
4. **Verified `sameAs`:** Only link authoritative, verified public profiles owned by Aakash Das or RisePaisa.

---

## 4. Financial Content Integrity & Regulatory Sourcing

1. **Primary Regulatory Sources:** All analysis, tax numbers, and capital market rules for Nepal must cite official institutions:
   - **Nepal Rastra Bank (NRB)** — Monetary policy, base rates, foreign exchange, circulars.
   - **Securities Board of Nepal (SEBON)** — Securities regulations, issue guidelines, fee caps.
   - **Nepal Stock Exchange (NEPSE)** — Trading rules, index data, listed companies.
   - **CDS and Clearing Limited (CDSC)** — DEMAT, MeroShare, C-ASBA rules.
   - **Inland Revenue Department (IRD Nepal)** — Income Tax Act 2058, Finance Acts, tax slabs.
2. **No Predictive Certainty:** Avoid phrases promising returns (*"This stock will give 50% returns"*). Use educational framing (*"Investors evaluating commercial banks may review credit loss provisions and NPL ratios"*).
3. **Date Accuracy:** Clearly distinguish original publication dates from verification dates (`Verified: [date]`). State fiscal year contexts explicitly (e.g., `FY 2082/83`).
4. **Mandatory Educational Disclaimer:** Include the contextual educational disclaimer on every article and course page.

---

## 5. Technical SEO & Routing Standards

1. **Canonical URLs:** Ensure all canonical links use lowercase paths without trailing slashes (e.g., `https://risepaisa.com/aakash-das`).
2. **Legacy Aliases:** Any legacy alias (`/author/aakash`, `/team/aakash`, `/aakash`) must redirect directly to `/aakash-das` in a single hop.
3. **Image Optimization:** Always specify descriptive alt text, explicit width/height dimensions, and WebP/optimized JPEG formats. Wrap standalone portraits in `<figure>` with `<figcaption>Aakash Das — Founder of RisePaisa</figcaption>`.
4. **XML Sitemap:** Maintain `sitemap.xml` with clean canonical URLs and include `<image:image>` tags for core brand assets and the founder portrait. Never include redirected, noindexed, or temporary URLs.
