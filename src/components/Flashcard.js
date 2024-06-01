// src/components/Flashcard.js
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const Flashcard = ({ flashcard }) => {
  const [flip, setFlip] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flip ? 1 : 0,
    transform: `perspective(600px) rotateY(${flip ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });

  return (
    <div 
      className="flashcard" 
      onClick={() => setFlip(!flip)}
    >
      <animated.div 
        className="front" 
        style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
      >
        {flashcard.question}
      </animated.div>
      <animated.div 
        className="back" 
        style={{ opacity, transform: transform.interpolate(t => `${t} rotateY(180deg)`) }}
      >
        {flashcard.answer}
      </animated.div>
    </div>
  );
};

export default Flashcard;
