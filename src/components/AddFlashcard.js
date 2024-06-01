// src/components/AddFlashcard.js
import React, { useState } from 'react';

const AddFlashcard = ({ addFlashcard }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addFlashcard({ id: Date.now(), question, answer });
    setQuestion('');
    setAnswer('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={question} 
        onChange={(e) => setQuestion(e.target.value)} 
        placeholder="Question" 
        required 
      />
      <input 
        type="text" 
        value={answer} 
        onChange={(e) => setAnswer(e.target.value)} 
        placeholder="Answer" 
        required 
      />
      <button type="submit">Add Flashcard</button>
    </form>
  );
};

export default AddFlashcard;
