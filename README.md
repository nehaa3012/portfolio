# Neha Chaudhary — Personal Developer Portfolio

A modern, minimal, editorial-inspired developer portfolio for **Neha Chaudhary**, Full Stack Developer at Builder Monkey. Built with Next.js 16 (App Router), React 19, Tailwind CSS v4, Motion, and TypeScript.

---

## ✦ Overview

- **Name:** Neha Chaudhary
- **Role:** Full Stack Developer
- **Company:** Builder Monkey (March 2026 – Present)
- **Education:** B.Tech in Computer Science Engineering, RKGIT (2022–2026)
- **GitHub:** [https://github.com/nehaa3012](https://github.com/nehaa3012)
- **Email:** [nehach782@gmail.com](mailto:nehach782@gmail.com)

---

## ✦ Key Sections

1. **Navigation:** Sticky navigation with NC monogram, smooth section scrolling, active scroll indication, and a one-click Resume download button.
2. **Hero:** Expressive typography with Playfair Display and Inter, professional status indicator, View Work and Download Resume CTAs, and verified GitHub & email links.
3. **About:** Verified narrative covering full-stack web, mobile, backend architecture, AI workflows, databases, and production deployments.
4. **Professional Experience:** Structured timeline featuring Builder Monkey with verified responsibilities and tech stack.
5. **Featured Projects:** High-impact showcase featuring FixCars (Web & Mobile), ATFenix, and eBliss with distinct layout proportions, contributions, and dedicated detail views (`/project/[id]`).
6. **Technical Skills:** Categorized into Languages, Frontend, Backend, Database, DevOps & Tools, and Other Technologies with interactive category filters.
7. **Education:** Compact, minimal academic summary for RKGIT (B.Tech CSE), Presidium School, and Mount Carmel School.
8. **Contact:** "Let's Build Something Meaningful" closing statement with direct email, copy address helper, GitHub link, and interactive direct message composer.
9. **Footer:** Clean branding, copyright, and smooth Back to Top action.

---

## ✦ Color Palette & Aesthetic

- **Warm Off-White:** `#F5F3EF`
- **Deep Charcoal:** `#151515`
- **Warm Black:** `#0D0D0C`
- **Stone:** `#D8D2C8`
- **Taupe:** `#A79D8F`
- **Champagne Bronze:** `#B08D57`

---

## ✦ Running Locally

```bash
# 1. Install dependencies (if needed)
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

To run a production build:
```bash
npm run build
npm run start
```

---

## ✦ Configuration & Assets

- **Resume PDF:** Placed at `public/resume.pdf`. You can update or replace this PDF anytime with your latest resume file.
- **Environment Variables (Optional):**
  - `RESEND_API_KEY`: If you wish to send emails via Resend from the contact API route.
  - `TURNSTILE_SECRET_KEY`: For Cloudflare Turnstile captcha verification.
  *(Note: The contact form works directly via `mailto:` even if no API keys are provided, ensuring zero dropped messages).*
