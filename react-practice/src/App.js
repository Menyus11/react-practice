import React, { useState, useEffect } from 'react';
import './App.css'

const App = () => {

  const [data, setData] = useState( {name: '', email: ''} );

  return(
    <div className='container p-5 row' style={{background: "pink"}}>
      <div className='col'></div>
      <form className='col-12' onSubmit={ ( e ) => {
        e.preventDefault();
        fetch( './feldolgozo.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify( data )
        })
      }}>

        <div className='text-center m-3'>
          <label htmlFor='name'>Kérjük írja be a felhasználónevét!</label>
          <input type="text" className="form-control" id="name" onChange={ (e) => setData({ ...data, name: e.target.value}) }/>
        </div>

        <div className='text-center m-3'>
          <label htmlFor='email'>Kérjük írja be az email címét!</label>
          <input type="text" className="form-control" id="email" onChange={ (e) => setData({ ...data, email: e.target.value}) }/>
        </div>

        <div>
          <button type="submit" className='btn btn-success form-control'>Küldés</button>
        </div>
      
      </form>
      <div className='col'></div>
      {/* <br /><p>név: {data.name}</p><br /><p>email: {data.email}</p> */}
    </div>

  )
}

export default App;