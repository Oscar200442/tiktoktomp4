import React, { useState, useEffect } from 'react';
import ThemeToggle from './components/ThemeToggle';
import VideoMetadata from './components/VideoMetadata';
import { fetchVideoData } from './lib/api';

interface VideoMetadataType {
  title: string;
  author: string;
  duration: number;
  thumbnail: string;
}

const App: React.FC = () => {
  const [url, setUrl] = useState<string>('');
  const [downloadUrl, setDownloadUrl] = useState<string>('');
  const [metadata, setMetadata] = useState<VideoMetadataType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
  }, []);

  const handleDownload = async () => {
    if (!url.trim()) {
      setError('Please enter a valid TikTok URL');
      return;
    }
    setIsLoading(true);
    setError('');
    setDownloadUrl('');
    setMetadata(null);

    try {
      const data = await fetchVideoData(url);
      if (data.success) {
        setDownloadUrl(data.downloadUrl);
        setMetadata(data.metadata);
        setUrl('');
      } else {
        setError('Failed to process the URL. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please check the URL and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-100 to-purple-100'}`}>
      <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <div className={`w-full max-w-md p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
        <h1 className="text-2xl font-bold text-center mb-4">TikTok to MP4 Downloader</h1>
        <div className="mb-4">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste TikTok video URL"
            className={`w-full p-3 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-800'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
        </div>
        <button
          onClick={handleDownload}
          disabled={isLoading}
          className={`w-full p-3 rounded-lg font-semibold ${isDarkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white disabled:opacity-50 transition-colors`}
        >
          {isLoading ? 'Processing...' : 'Download Video'}
        </button>
        {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
        {metadata && <VideoMetadata metadata={metadata} />}
        {downloadUrl && (
          <a
            href={downloadUrl}
            download
            className={`mt-4 block w-full p-3 rounded-lg text-center ${isDarkMode ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600'} text-white font-semibold`}
          >
            Download Video
          </a>
        )}
      </div>
      <footer className="mt-6 text-sm">
        <p>Built by Oscar200442 | Powered by RapidAPI</p>
      </footer>
    </div>
  );
};

export default App;
