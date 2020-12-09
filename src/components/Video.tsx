import React, { FC, useEffect, useRef, useState } from 'react';

const Video: FC<{ src: string }> = ({ src }) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const videoRef = useRef(null);
  useEffect(() => {
    videoRef.current.src = src;

    videoRef.current.addEventListener('loadeddata', () => {
      setIsLoaded(true);
    });
  }, [src, videoRef]);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      style={{
        position: 'fixed',
        width: '100%',
        left: 0,
        top: 0,
        bottom: 0,
        opacity: isLoaded ? 1 : 0,
        height: '100vh',
        zIndex: -1,
        objectFit: 'cover',
        transition: 'opacity, 5s ease-in-out',
        transitionDelay: '2s'
      }}
    />
  );
};

export default Video;
