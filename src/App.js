import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import NewEntry from './components/NewEntry';
import Week from './components/Week';
import Button from './components/Button';

class App extends Component {
  constructor(){
    super()

    this.state = {
      picture: ''
    }
  }

  componentDidMount(){
    axios.get('http://localhost:3000/api/kanye').then(response => {
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
        <div className='content-wrapper'>
          <NewEntry />
          <div className='button-wrapper'>
          <Button week='1'></Button>
          <Button week='2'></Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
