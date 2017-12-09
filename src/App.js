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
      picture: '',
      links: []
    }
    this.getShit = this.getShit.bind(this)
  }

  componentDidMount(){
    axios.get('http://localhost:3000/api/kanye').then(response => {
      console.log(response);
      this.setState({picture: response.data})
    })
  }
  
  getShit(){
    axios.get('http://localhost:3000/api/links').then(response => this.setState({links: response.data}))

  }  

  

  render() {
    let displayLinks = this.state.links.map((element, index )=> { 
      console.log(element.link)
      return(<li key={index}>{`Week ${element.week} Day ${element.day} - ${element.link} - ${element.status}`}</li>)})

    return (
      <div className="App">
        <header className="App-header">
          <img src={this.state.picture} className="App-logo" alt="logo" />
          <h1 className="App-title">Daily Projects</h1>
        </header>
        <div className='content-wrapper'>
          <NewEntry getShit={this.getShit}/>
          <div className='button-wrapper'>
           Links: {displayLinks}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
