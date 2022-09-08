import './App.css';

function App() {

  
  
  return (
    
    <div className="app-main">

      <button onClick={ () => {
        alert( document.getElementById('my-input').value )
      } } 
      style={{
        borderRadius: "5px",
        padding: "10px",
        backgroundColor: "blue",
        color: "yellow", 
        marginBottom: "10px"
      }}><b>Kattints ide!</b></button>

      <label htmlFor="my-input">Cimke az input mezőhöz</label>

      <input  type="text" style={{
        backgroundColor: "yellow", 
        color: "gray",
        border: "4px solid green"
      }} id="my-input"/>

    </div>
  );
  ;
}

export default App;
