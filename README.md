<div align="center">

<img width="1200" height="475" alt="AntiScammer Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />

<br/>

# 🛡️ AntiScammer AI

### Real-time Phishing & Scam Detection for Malaysia

*Powered by Google Gemini 2.0 Flash — Built for Project 2030 Hackathon*

<br/>

[![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white)](https://github.com/YOUR_USERNAME/antiscammer/releases)
[![Gemini 2.0 Flash](https://img.shields.io/badge/Gemini-2.0%20Flash-8E44AD?style=for-the-badge&logo=google&logoColor=white)](https://aistudio.google.com)
[![Malaysia](https://img.shields.io/badge/🇲🇾-Malaysia%20First-CC0001?style=for-the-badge)](https://github.com/YOUR_USERNAME/antiscammer)
[![License](https://img.shields.io/badge/License-Apache%202.0-003893?style=for-the-badge)](LICENSE)

<br/>

> **RM2.4 Billion** lost to scams in Malaysia in 2024.
> **68,000+** cases reported yearly. **Zero** dedicated local AI protection tools — until now.

<br/>

[📦 Download Extension](#-installation) · [🌐 Live Demo](https://ai.studio/apps/74a348b7-08b0-4745-8de5-44003ac52c95) · [🚀 Deploy Yourself](#-deployment)

</div>

---

## 🇲🇾 What is AntiScammer?

AntiScammer is a **Chrome Extension** that silently guards you as you browse — analyzing every page in real-time for phishing attempts, malicious APKs, and social engineering scams that specifically target Malaysians.

Unlike generic tools, AntiScammer understands the **Malaysian threat landscape**: fake Maybank2u portals, cloned LHDN tax refund pages, "Cleaning Service" APK malware, Telegram investment scams, and more — in both **Bahasa Malaysia and English**.

```
You visit a website
      ↓
AntiScammer checks local MCMC/PDRM blacklist  ←── zero API quota used if matched
      ↓ (if not blacklisted)
Gemini 2.0 Flash analyzes the page context
      ↓
Risk overlay appears in your browser: SAFE / SUSPICIOUS / DANGER
      ↓
Clear advice in BM or EN — what to do next
```

---

## ✨ Features

| Feature | Description |
|---|---|
| ⚡ **Instant Analysis** | Every page scanned in under 2 seconds via Gemini 2.0 Flash |
| 🗄️ **RAG Grounding** | Local MCMC/PDRM blacklist checked before any API call — saves quota |
| 🇲🇾 **Malaysia-First AI** | Trained context: Maybank2u, CIMB, Shopee, EPF, LHDN, APK scams |
| 🌐 **Bilingual** | Warnings and advice in Bahasa Malaysia & English |
| 💾 **Smart Cache** | 24h result cache per domain — no redundant scans |
| 🔔 **In-Page Sidebar** | Shadow DOM overlay — no popups, no friction, zero page interference |
| 🔐 **Privacy-First** | API key stored locally in your browser. Your data never leaves your device |
| 🆓 **Free** | Zero cost to Malaysian citizens |

---

## 🎯 Scam Types Detected

- **Phishing Clones** — Fake Maybank2u, CIMB Clicks, Shopee, Lazada, EPF, LHDN portals
- **APK Malware** — "VPP Cleaning Service", "PDRM Check", sideloaded apps that steal SMS TAC codes
- **Investment Scams** — Telegram groups, "Tan Sri" endorsements, suspicious high-yield schemes
- **Mule Account Recruitment** — "Easy money" offers involving your bank account
- **Social Engineering** — Urgency tactics, OTP requests, fake government impersonation

---

## 📦 Installation

### Quick Install (Recommended)

1. [**Download the latest release →**](https://github.com/YOUR_USERNAME/antiscammer/releases/latest)
2. Unzip the downloaded file
3. Open Chrome and go to `chrome://extensions`
4. Toggle **Developer Mode** ON (top-right corner)
5. Click **Load unpacked** → select the unzipped `extension/` folder
6. Pin AntiScammer to your toolbar
7. Click the extension icon → **Options** → paste your Gemini API key
8. 🎉 You're protected!

### Get a Free Gemini API Key

Head to [Google AI Studio](https://aistudio.google.com/app/apikey) — it's free, takes 30 seconds.

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────┐
│                   USER BROWSER                      │
│  Chrome Extension (Manifest V3)                     │
│  content.js · popup.js · background.js              │
└───────────────────┬─────────────────────────────────┘
                    │ page URL + title + content
                    ▼
┌─────────────────────────────────────────────────────┐
│              GROUNDING LAYER  (RAG Lite)            │
│  Local MCMC/PDRM blacklist — zero API quota used    │
└───────────────────┬─────────────────────────────────┘
                    │ (if not blacklisted)
                    ▼
┌─────────────────────────────────────────────────────┐
│              AI INFERENCE                           │
│  Google Gemini 2.0 Flash                            │
│  Structured JSON output: risk · confidence · action │
└───────────────────┬─────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────────────┐
│              CACHE STORE                            │
│  chrome.storage.local · 24h TTL · max 50 entries   │
└─────────────────────────────────────────────────────┘
                    │
                    ▼
         Shadow DOM Sidebar Overlay
     Risk badge · Confidence % · Action advice
```

---

## 🛠️ Tech Stack

**Extension**
- Chrome Manifest V3 — Service Worker + Content Scripts
- JavaScript ES Modules — `background.js`, `content.js`, `popup.js`
- Shadow DOM — isolated UI sidebar, zero CSS conflicts

**AI / Intelligence**
- Google Gemini 2.0 Flash — bilingual structured threat analysis
- RAG Grounding — local MCMC/PDRM domain blacklist
- `chrome.storage.local` — scan cache + history log

**Web App (Demo Portal)**
- React 19 + TypeScript + Vite
- Tailwind CSS v4
- Deployed on Google Cloud Run

---

## 💻 Run Locally

**Prerequisites:** Node.js 18+

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/antiscammer.git
cd antiscammer

# Install dependencies
npm install

# Set your Gemini API key
cp .env.example .env.local
# Edit .env.local → GEMINI_API_KEY=your_key_here

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🚀 Deployment

### Web App → Google Cloud Run

```bash
# Build and push Docker image
gcloud builds submit --tag gcr.io/YOUR_PROJECT_ID/antiscammer-web

# Deploy to Cloud Run (asia-southeast1 = Singapore, closest to Malaysia)
gcloud run deploy antiscammer-web \
  --image gcr.io/YOUR_PROJECT_ID/antiscammer-web \
  --platform managed \
  --region asia-southeast1 \
  --allow-unauthenticated \
  --port 8080
```

### Chrome Extension → GitHub Releases

```bash
zip -r antiscammer-extension-v1.0.0.zip extension/
git tag v1.0.0 && git push origin v1.0.0
# Attach the ZIP to the GitHub Release
```

---

## 🗺️ Roadmap

| Phase | Status | Milestone |
|---|---|---|
| **Phase 1 — MVP** | ✅ Done | Chrome Extension, Gemini 2.0 Flash, local blacklist |
| **Phase 2 — Growth** | 🔄 Planned | Shared cloud API, crowdsourced reporting, Firefox port, 100k users |
| **Phase 3 — National** | 🔄 Planned | MCMC/PDRM live feed, Bank Negara partnership, Mobile SDK, 1M+ users |

Long-term: Federated threat intelligence across ASEAN · Open API for fintech & e-commerce

---

## 🤝 Contributing

Contributions are welcome! If you've spotted a new scam domain, open a PR to add it to the blacklist in `background.js`.

1. Fork the repo
2. Create your branch: `git checkout -b feat/new-scam-domain`
3. Commit: `git commit -m 'feat: add new phishing domain to blacklist'`
4. Push & open a Pull Request

---

## 📄 License

Licensed under the [Apache 2.0 License](LICENSE).

---

<div align="center">

Built with ❤️ for Malaysia · Project 2030 Hackathon · 2026

**AntiScammer AI** — *Protecting Malaysia, One Click at a Time.*

🇲🇾

</div>
