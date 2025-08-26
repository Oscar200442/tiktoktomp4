// A simple Node.js web server using Express.
// This is the main application file, often named index.js or app.js.
const express = require('express');
const path = require('path');
const { tiktokdl } = require('tiktok-downloader');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Main route to serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API endpoint to handle the TikTok video download
app.post('/download', async (req, res) => {
  const { url } = req.body;
  if (!url) {
    return res.status(400).json({ error: 'TikTok URL is required.' });
  }

  try {
    // Use the tiktok-downloader library to get the video data
    const data = await tiktokdl(url);

    // Check if a video URL exists
    const videoUrl = data.video.noWatermark;
    if (videoUrl) {
      res.json({ success: true, url: videoUrl });
    } else {
      res.status(404).json({ error: 'No video found for the provided URL.' });
    }
  } catch (error) {
    console.error('Download error:', error.message);
    res.status(500).json({ error: 'Failed to download the video. Please check the URL or try again.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
