import React, { FC, useEffect, useRef, useState } from 'react';

const Miro: FC<{ src: string }> = ({ src }) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const miroRef = useRef(null);
  useEffect(() => {
    miroRef.current.src = 'https://miro.com/app/live-embed/' + src + '=/?moveToViewport=-813,-457,1625,913';

    miroRef.current.addEventListener('loadeddata', () => {
      setIsLoaded(true);
    });
  }, [src, miroRef]);

  return (
    <iframe
      ref={miroRef}
      width="768" 
      height="432"
      scrolling="no" 
      allowFullScreen
      
    />
  );
};

export default Miro;
