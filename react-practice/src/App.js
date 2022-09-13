import React, { useEffect, useState } from 'react';

export default function App() {

  const [list, setList] = useState( [] )

  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then( (res) => {
      return res.json();
    })
    .then( (res) => {
    setList( res );
    })
  }, []);



  return (
    <div className='container'>
      { list.map( (item, index) => {
        return <React.Fragment key={index}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
          <hr />
        </React.Fragment>
      })}
    </div>
  )

}