import React from 'react';

interface Metadata {
  title: string;
  author: string;
  duration: number;
  thumbnail: string;
}

interface VideoMetadataProps {
  metadata: Metadata;
}

const VideoMetadata: React.FC<VideoMetadataProps> = ({ metadata }) => {
  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold">Video Details</h2>
      <p><strong>Title:</strong> {metadata.title}</p>
      <p><strong>Author:</strong> {metadata.author}</p>
      <p><strong>Duration:</strong> {metadata.duration} seconds</p>
      {metadata.thumbnail && (
        <img src={metadata.thumbnail} alt="Thumbnail" className="mt-2 rounded-lg w-full" />
      )}
    </div>
  );
};

export default VideoMetadata;
