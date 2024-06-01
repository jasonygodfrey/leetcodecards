// src/App.js
import React, { useState } from 'react';
import FlashcardList from './components/FlashcardList';
import './App.css';

const initialFlashcards = Array.from({ length: 75 }, (_, i) => ({
  id: i,
  question: `LeetCode Question ${i + 1}`,
  answer: `Answer for LeetCode Question ${i + 1}`
}));

const App = () => {
  const [flashcards] = useState(initialFlashcards);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

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

  return (
    <div className="App">
      <h1>Leetcode Flashcards</h1>
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
      <FlashcardList flashcards={flashcards} currentCardIndex={currentCardIndex} handleNextCard={handleNextCard} handlePreviousCard={handlePreviousCard} />
    </div>
  );
};

export default App;
