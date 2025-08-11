import React, { useState } from 'react';
import styles from './StudioVideos.module.css';

const VideoGallery = ({ videos }) => {
  const [videoOrientations, setVideoOrientations] = useState({});

  const handleVideoLoad = (index, event) => {
    const video = event.target;
    const isLandscape = video.videoWidth > video.videoHeight;
    
    setVideoOrientations(prev => ({
      ...prev,
      [index]: isLandscape
    }));
  };

  return (
    <div className={styles.container}>
      {videos.map((video, index) => (
        <div key={index} className={styles.videoWrapper}>
          <video 
            className={`${styles.video} ${videoOrientations[index] ? styles.landscapeVideo : styles.portraitVideo}`}
            src={video.src} 
            alt={video.alt} 
            autoPlay 
            loop 
            muted 
            playsInline 
            controls
            onLoadedMetadata={(e) => handleVideoLoad(index, e)}
          />
        </div>
      ))}
    </div>
  );
};

export default VideoGallery;