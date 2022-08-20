import React from 'react';  
import './App.css';
import WordCard from './WordCard';

const word1 = "Hello";
const word2 = "Computer";
const word3 = "Engineer";
const word4 = "Bye";
function App() {
  return (
    <div>
      <WordCard value ={word1}/>
      <WordCard value ={word2}/>
      <WordCard value ={word3}/>
      <WordCard value ={word4}/>
    </div>
  );
}

export default App;
