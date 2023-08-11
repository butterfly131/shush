import React from 'react'

const AudioPlayer = () => {
    const audioRef = React.useRef(null);
  
    const handlePlay = () => {
      audioRef.current.play();
    };
  
    return (
      <div>
        <audio ref={audioRef} src="/public/Blumenlied Op39.mp3" />
        <button onClick={handlePlay}>Play Audio</button>
      </div>
    );
  };
  

export default AudioPlayer