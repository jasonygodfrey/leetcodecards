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
        style={{ opacity: opacity.to(o => 1 - o), transform }}
      >
        <h2>{flashcard.title}</h2>
        <p className={`difficulty ${flashcard.difficulty.toLowerCase()}`}>{flashcard.difficulty}</p>
        <p>{flashcard.description}</p>
        <p className="example">{flashcard.example}</p>
        <p className="type">{flashcard.type}</p>
      </animated.div>
      <animated.div 
        className="back" 
        style={{ opacity, transform: transform.to(t => `${t} rotateY(180deg)`) }}
      >

        <div className="code">
          
          <pre>{flashcard.codeanswer}</pre>
        </div>
        <div className="explanation">
         
          <p>{flashcard.answerexplanation}</p>
        </div>
      </animated.div>
    </div>
  );
};

export default Flashcard;
