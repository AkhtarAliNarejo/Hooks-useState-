import { useState } from 'react';
import './App.css';

function App() {
//  let counter=15
// usings of hooks which is setState 

let [counter,setCounter]=useState(15)


  const addValue=()=>{
    console.log("added value",counter)
   counter=counter+1
   setCounter(counter)
  }
  const removevalue=()=>{
    setCounter(counter-1)
  }
  return (
    <>
    <h1>Hello pakistan</h1>
    <h2>Counter value:{counter}</h2>
    <button onClick={addValue}>Add value{counter}</button>
    <button onClick={ removevalue}>Decrease value{counter}</button>
    <p>footer:{counter}</p>
    </>
  );
}

export default App;
