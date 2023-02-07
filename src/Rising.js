import React from 'react';
import useSound from 'use-sound';


import glugSfx from './sounds/glug-a.mp3';

    function Rising() {
  const [playbackRate, setPlaybackRate] = React.useState(0.75);

  const [play] = useSound(glugSfx, {
    playbackRate,
    volume: 0.5,
  });

  const handleClick = () => {
    setPlaybackRate(playbackRate + 0.1);
    play();
  };

  return (
    <button className='flex items-center text-xl mt-16 origin-center'
    onClick={handleClick}>
      <span role="img" aria-label="Heart">
        💖 {' '} click this one!
      </span>
    </button>
  );
}


export default Rising;