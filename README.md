TikTok to MP4 Downloader

A web application for downloading TikTok videos without watermarks, built with React, TypeScript, Tailwind CSS, and Node.js serverless functions. Hosted on Vercel and versioned on GitHub.

Features





Paste a TikTok video URL to download it as an MP4 without a watermark.



Modern, responsive UI with dark/light theme toggle.



Displays video metadata (title, author, duration, thumbnail).



Error handling for invalid URLs and server issues.



Serverless backend to securely handle API requests.

Tech Stack





Frontend: React, TypeScript, Tailwind CSS, Vite



Backend: Node.js (Vercel serverless functions), Axios



API: RapidAPI TikTok Video No Watermark



Deployment: Vercel



Version Control: GitHub

Setup Instructions

1. Create GitHub Repository





Create a repository named tiktoktomp4 under Oscar200442 on GitHub.



Clone it: git clone https://github.com/Oscar200442/tiktoktomp4.git



Add all files provided and push:

git add .
git commit -m "Initial commit"
git push origin main

2. Setup Locally (Optional)





Install Node.js 18+.



Install dependencies: npm install



Run locally: npm run dev



Test serverless function: vercel dev

3. Deploy to Vercel





Sign in to Vercel and create a new project.



Connect to Oscar200442/tiktoktomp4 on GitHub.



Configure:





Framework Preset: Other



Build Command: npm run build



Output Directory: dist



Environment Variables: Add RAPIDAPI_KEY=your-rapidapi-key-here



Deploy and access the URL (e.g., https://tiktoktomp4.vercel.app).

4. API Integration





Sign up on RapidAPI, subscribe to the TikTok Video No Watermark API, and obtain your API key.



Add the key to Vercel’s environment variables under project settings.

License

MIT License

Acknowledgments





RapidAPI for the TikTok Video No Watermark API



Tailwind CSS for styling



Vercel for hosting
