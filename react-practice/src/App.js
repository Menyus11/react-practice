import React from 'react';
import './App.css';

export default class App extends React.Component {

  constructor(props) {
    super( props )
  }

  state = {
    count: 0
  }

  render() {
    return (<div className='container p-3'><button onClick={ () => this.setState( { count: this.state.count -1 } ) } className="btn btn-danger m-2"> - </button>
            <button onClick={ () => this.setState( { count: this.state.count +1 } ) } className="btn btn-success m-2" > + </button>
            <div className='m-2'><b>{this.state.count}</b></div>
            </div>)
  }
}


