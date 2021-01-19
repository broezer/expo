import React, { FC, useEffect, useRef, useState } from 'react';

const Visuals: FC<{ src: string }> = ({ src }) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const imgRef = useRef(null);
  useEffect(() => {
    imgRef.current.src = '/di-visuals/' + src + '.jpg';

    imgRef.current.addEventListener('loadeddata', () => {
      setIsLoaded(true);
    });
  }, [src, imgRef]);

  return (
    <img
      ref={imgRef}
      className="w-full"
    />
  );
};

export default Visuals;
