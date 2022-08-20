import React from 'react';  
import './App.css';
import WordCard from './WordCard';

const word = ['Thailand', 'Laos', 'Philippines', 'Singapore', 'Brunei', 'Malaysia', 'Myanmar', 'Indonesia', 'Vietnam', 'cambodia'];
const random = word[Math.floor(Math.random()*word.length)];

function App() {
  return (
    <div>
      <WordCard value = {random}/>
    </div>
  );
}

export default App;
