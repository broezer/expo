import React, { FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import 'tailwindcss/dist/tailwind.css';

const AsideWrapper = styled.aside`
  min-width: 30vw;
  max-width: 30vw;
  min-height: 19vw;
  background: rgba(0, 0, 0, 0.9);
  border-radius: 10px;
  box-shadow: 0 0 2vw rgb(0, 0, 0);
  padding: 0 2vw;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 15vh;
  right: 1vw;
`;


const Twitchi: FC<{ src: string }> = ({ src }) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const miroRef = useRef(null);
  useEffect(() => {
    miroRef.current.src = src;

    miroRef.current.addEventListener('loadeddata', () => {
      setIsLoaded(true);
    });
  }, [src, miroRef]);

  return (
    <AsideWrapper>
      <div className="twitch absolute inline-block w-11/12 h-5/6">
        <div className="twitch-video w-full h-full">
          <iframe
            ref={miroRef}
            width="100%" 
            height="100%"
            scrolling="no" 
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    </AsideWrapper>
    
  );
};

export default Twitchi;
