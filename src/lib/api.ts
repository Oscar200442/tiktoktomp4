import axios from 'axios';

interface VideoData {
  success: boolean;
  downloadUrl: string;
  metadata: {
    title: string;
    author: string;
    duration: number;
    thumbnail: string;
  };
}

export const fetchVideoData = async (url: string): Promise<VideoData> => {
  try {
    const response = await axios.post('/api/download', { url });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch video data');
  }
};
