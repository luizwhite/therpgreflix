import React from 'react';
import VideoCardContainer from './styles';

function getYouTubeId(youtubeURL) {
  return youtubeURL.replace(
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
    '$7',
  );
}

function VideoCard({ videoTitle, videoURL, categoryColor }) {
  const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;

  /* checklater */
  return (
    <VideoCardContainer
      url={image}
      href={videoURL}
      categoryColor={categoryColor}
      target="_blank"
      title={videoTitle}
    />
  );
}

export default VideoCard;
