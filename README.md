# TikTok to MP4 Downloader

A web application for downloading TikTok videos without watermarks, built with React, TypeScript, Tailwind CSS, and Node.js serverless functions. Hosted on Vercel and versioned on GitHub.

## Features
- Paste a TikTok video URL to download it as an MP4 without a watermark.
- Modern, responsive UI with dark/light theme toggle.
- Displays video metadata (title, author, duration, thumbnail).
- Error handling for invalid URLs and server issues.
- Serverless backend to securely handle API requests.

## Tech Stack
- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Node.js (Vercel serverless functions), Axios
- **API**: RapidAPI TikTok Video No Watermark
- **Deployment**: Vercel
- **Version Control**: GitHub

## Setup Instructions

### 1. Create GitHub Repository
- Create a repository named `tiktoktomp4` under `Oscar200442` on GitHub.
- Clone it: `git clone https://github.com/Oscar200442/tiktoktomp4.git`

### 2. Setup Project
- Add files: `public/index.html`, `api/download.js`, `api/package.json`, `vercel.json`, `.gitignore`, and this `README.md`.
- For a Vite-based frontend:
  - Run `npm create vite@latest client -- --template react-ts`
  - Install Tailwind CSS: Follow [Tailwind's Vite guide](https://tailwindcss.com/docs/guides/vite).
  - Move `App` component code from `index.html` to `client/src/App.tsx`.
- Push to GitHub:
  ```bash
  git add .
  git commit -m "Initial commit"
  git push origin main
