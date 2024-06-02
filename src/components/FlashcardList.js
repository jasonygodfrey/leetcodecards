// src/components/FlashcardList.js
import React from 'react';
import Flashcard from './Flashcard';

const FlashcardList = ({ flashcards, currentCardIndex, handleNextCard, handlePreviousCard, handleShuffle }) => {
  return (
    <div className="flashcard-container">
      {flashcards.length > 0 && <Flashcard flashcard={flashcards[currentCardIndex]} />}
      <div className="navigation-buttons">
        <button onClick={handlePreviousCard}>&lt;</button>
        <button onClick={handleShuffle}>
          <i className="fas fa-random"></i>
        </button>
        <button onClick={handleNextCard}>&gt;</button>
      </div>
    </div>
  );
};

export default FlashcardList;
