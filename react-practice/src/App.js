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
    return (<div><button onClick={ () => this.setState( { count: this.state.count -1 } ) } > - </button>
            <button onClick={ () => this.setState( { count: this.state.count +1 } ) } > + </button><div>{this.state.count}</div></div>)
  }
}


