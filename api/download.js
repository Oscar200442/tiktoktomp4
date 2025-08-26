const axios = require('axios');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const { url } = req.body;
  if (!url) {
    return res.status(400).json({ success: false, error: 'URL is required' });
  }

  try {
    const response = await axios({
      method: 'GET',
      url: 'https://tiktok-video-no-watermark2.p.rapidapi.com',
      params: { url, hd: '0' },
      headers: {
        'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'tiktok-video-no-watermark2.p.rapidapi.com',
      },
    });

    const data = response.data;
    if (data.code === 0) {
      res.json({
        success: true,
        downloadUrl: data.data.play,
        metadata: {
          title: data.data.title,
          author: data.data.author.nickname,
          duration: data.data.duration,
          thumbnail: data.data.cover,
        },
      });
    } else {
      res.status(500).json({ success: false, error: 'Failed to fetch video' });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server error' });
  }
};
