import React ,{useRef} from 'react';
import './App.css';

function App() {
  let inputRef=useRef(null)
  function handleInput(){
    inputRef.current.style.color="red";
    inputRef.current.value='100';
    inputRef.current.focus();
  }

  return (
    <div className="App">
    <input type="text" ref={inputRef}/>
    <button onClick={handleInput}>Handle Input</button>
      
    </div>
  );
}

export default App;
