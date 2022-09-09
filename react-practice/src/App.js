import './App.css';
import { useState } from 'react';


function App() {

  const [count, setCount] = useState( 0 );
  
  return (
    <div className="app-main">

      <button onClick={ () => { setCount( count - 1 ) } } style={{backgroundColor: "red", width: "25px", height: "25px", margin: "5px"}}> - </button>
      <button onClick={ () => { setCount( count + 1 ) } } style={{backgroundColor: "green", width: "25px", height: "25px"}}> + </button>

      <div><b>{count}</b></div>

    </div>
  );
  
}

export default App;
