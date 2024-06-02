import React, { useState, useEffect } from 'react';
import FlashcardList from './components/FlashcardList';
import './App.css';

const App = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    fetch('/cards.json')
      .then(response => response.json())
      .then(data => setFlashcards(data));
  }, []);

  const handleCardChange = (index) => {
    setCurrentCardIndex(index);
  };

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex < flashcards.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePreviousCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : flashcards.length - 1
    );
  };

  const handleShuffle = () => {
    const newIndex = Math.floor(Math.random() * flashcards.length);
    setCurrentCardIndex(newIndex); // Set current index to a random index
  };

  return (
    <div className="App">
      <h1>LeetCode Blind75 Flashcards</h1>
      <div className="navigation">
        {flashcards.map((flashcard, index) => (
          <button
            key={flashcard.id}
            onClick={() => handleCardChange(index)}
            className={currentCardIndex === index ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <FlashcardList
        flashcards={flashcards}
        currentCardIndex={currentCardIndex}
        handleNextCard={handleNextCard}
        handlePreviousCard={handlePreviousCard}
        handleShuffle={handleShuffle}
      />
    </div>
  );
};

export default App;
