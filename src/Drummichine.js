import React from 'react';
import useSound from 'use-sound';


import drumSfx from './sounds/drums.mp3';

const useKeyboardBindings = map => {
  React.useEffect(() => {
    const handlePress = ev => {
      const handler = map[ev.key];

      if (typeof handler === 'function') {
        handler();
      }
    };

    window.addEventListener('keydown', handlePress);

    return () => {
      window.removeEventListener('keydown', handlePress);
    };
  }, [map]);
};

function DrumMachine() {
  const [play] = useSound(drumSfx, {
    sprite: {
      kick: [0, 350],
      hihat: [374, 160],
      snare: [666, 290],
      cowbell: [968, 200],
    },
  });

  // Custom hook that listens for 'keydown',
  // and calls the appropriate handler function.
  useKeyboardBindings({
    1: () => play({ id: 'kick' }),
    2: () => play({ id: 'hihat' }),
    3: () => play({ id: 'snare' }),
    4: () => play({ id: 'cowbell' }),
  });

  return (
    <>
      <h2>Drum machine</h2>
      <button className='inline-block m-10 origin-center border-double border-4 border-sky-500 ' aria-label="kick" onMouseDown={() => play({ id: 'kick' })}>
        1
      </button>
      <button className='inline-block m-10 origin-center border-double border-4 border-sky-500 '
        aria-label="hihat"
        onMouseDown={() => play({ id: 'hihat' })}
      >
        2
      </button>
      <button className='inline-block m-10 origin-center border-double border-4 border-sky-500  '
        aria-label="snare"
        onMouseDown={() => play({ id: 'snare' })}
      >
        3
      </button>
      <button className='inline-block m-10 origin-center border-double border-4 border-sky-500 '
        aria-label="cowbell"
        onMouseDown={() => play({ id: 'cowbell' })}
      >
        4
      </button>
      <p>
        You can also use your keyboard!
        <br />
        Type "1" through "4".
      </p>
    </>
  );
}




export default DrumMachine;