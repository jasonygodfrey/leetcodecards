// src/components/FlashcardList.js
import React from 'react';
import Flashcard from './Flashcard';

const FlashcardList = ({ flashcards, currentCardIndex, handleNextCard, handlePreviousCard }) => {
  return (
    <div className="flashcard-container">
      <Flashcard flashcard={flashcards[currentCardIndex]} />
      <div className="navigation-buttons">
        <button onClick={handlePreviousCard}>&lt;</button>
        <button onClick={handleNextCard}>&gt;</button>
      </div>
    </div>
  );
};

export default FlashcardList;
