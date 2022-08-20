import React from 'react';  
import './App.css';
import WordCard from './WordCard';

const word = ['Thailand', 'Laos', 'Philippines', 'Singapore', 'Brunei', 'Malaysia', 'Myanmar', 'Indonesia', 'Vietnam', 'cambodia'];
const random = word[Math.floor(Math.random()*word.length)];

function refreshPage() {
  window.location.reload(false);
}

function App() {
  return (
    <div>
      <h1 className='h1'>Welcome to Word Card Game</h1>
      <WordCard value = {random}/>
      <button
        type="button"
        className='button'
        onClick={refreshPage}
        >New Game</button>
    </div>
  );
}

export default App;
