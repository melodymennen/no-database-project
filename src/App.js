import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Week from './components/week';

class App extends Component {
  constructor(){
    super()

    this.state = {
      picture: ''
    }
  }

  componentDidMount(){
    axios.get('http://localhost:3000/api/test').then(response => {
      console.log(response);
      this.setState({picture: response.data})
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={this.state.picture} className="App-logo" alt="logo" />
          <h1 className="App-title">Daily Projects</h1>
        </header>
        <div>
          <Week />
        </div>
      </div>
    );
  }
}

export default App;
