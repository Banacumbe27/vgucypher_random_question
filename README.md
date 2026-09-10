# VGU Cypher — Random Question System

Minimalist, high-performance web-based question and assessment system engineered for **VGU Cypher**. Features bilingual support (English / Vietnamese), AI-powered short answer grading via **Mistral AI**, instant word-by-word passcode matching, and a persistent lock mechanism.

---

## Features

- **Strict Monochrome Minimalist UI**: Clean typography, high-contrast dark/light mode toggle, and hand-drawn animated SVG ticks and crosses.
- **Bilingual Switcher (EN / VIE)**: Dynamically toggle between English and Vietnamese on the fly without losing current quiz progress or interaction state.
- **AI-Powered Short Answer Grading**:
  - Integrated with **Mistral AI** (`mistral-small-latest`, with automatic graceful fallback to `ministral-8b-latest` / `open-mistral-7b`).
  - Evaluates semantic match percentage (0% to 100%).
  - Semantic-only grading principle (*"không cần chấm về mặt từ ngữ diễn đạt, miễn đúng ý"*).
  - Multilingual evaluation: Accepts technical concepts in English, Vietnamese, or mixed phrasing.
- **Instant Match Detection**:
  - Automatically identifies matching answers while typing and renders the result with 0ms delay.
- **`ignore_ai` Passcode Matching**:
  - Direct character-by-character exact match for secret passcodes (e.g., Caesar cipher `uftbxogdqlzhchmg` $\rightarrow$ `vgucyphermaidinh`) without calling the AI.
- **Controls Lock**:
  - Password-protected controls menu with persistent localStorage authentication (default passcode: `duypher67`).
- **CSV Question Management**:
  - Support for custom CSV imports, search indexing, and sample dataset restoration.
- **Vercel Serverless Architecture**:
  - Serverless proxy route (`/api/grade.js`) keeps the Mistral API key secure on Vercel without exposing secrets in client-side code.

---

## Deployment on Vercel

1. Push this repository to GitHub:
   ```bash
   git init
   git remote add origin https://github.com/Banacumbe27/vgucypher_random_question.git
   git add .
   git commit -m "Initial release"
   git push -u origin main
   ```
2. Import the repository into [Vercel](https://vercel.com).
3. Under **Settings > Environment Variables**, add:
   - **Key**: `MISTRAL_API_KEY`
   - **Value**: `your_mistral_api_key_here`
4. Deploy!

---

## Local Development

Run with any local HTTP server:
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000`.

---

## License

MIT License. Designed for VGU Cypher.
