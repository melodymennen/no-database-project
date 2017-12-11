import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import NewEntry from './components/NewEntry';
import Button from './components/Button';
import Search from './components/Search'


class App extends Component {
  constructor(){
    super()

    this.state = {
      picture: '',
      links: [],
      gif: 'https://media.giphy.com/media/9zXWAIcr6jycE/giphy.gif'
    }
    this.getShit = this.getShit.bind(this)
    this.submitSearch = this.submitSearch.bind(this)
    this.bored = this.bored.bind(this)
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

  submitSearch(searchLetters){
    console.log('hello')
    axios.get(`http://localhost:3000/api/search?link=${searchLetters}`).then(response => {
    console.log(response.data)
    this.setState({links: response.data})})

  }

  updateStatus(id, status){
    let newStatus = ''
    if (status === 'In Progress'){
      newStatus = 'Complete'
    }
    else if (status === 'Complete'){
      newStatus = 'In Progress' 
    }
    axios.put(`http://localhost:3000/api/links/${id}`, {status: newStatus}).then(response => this.setState({links: response.data}))
  }

  delete(id){
    axios.delete(`http://localhost:3000/api/links/${id}`).then(response => this.setState({links:response.data}))
  }

  bored(){
    axios.get('https://api.giphy.com/v1/gifs/random?api_key=bDEZlekRn1iNKzkyjwKOuUnNOMrSd4Wk&tag=rick-and-morty&rating=G').then(response => {
      this.setState({gif: response.data.data.url})
      console.log(this.state.gif)

  })
}
  

  render() {
    let displayLinks = this.state.links.map((element, index )=> { 
      console.log(element.link)
      return(
        <div>   
          <li>
            {`Week ${element.week} Day ${element.day} - ${element.link} - ${element.status}`}  
            <Button onClick={() => {
              this.updateStatus(element.id, element.status)}}>Update Status</Button>
            <Button onClick= {() => this.delete(element.id)}>Delete</Button>
          </li>
        </div>)})

    return (
      <div className="App">
        <header className="App-header">
          <img src={this.state.picture} className="App-logo" alt="logo" />
          <h1 className="App-title">Daily Projects</h1>
          <div className="search-bar">
            <Search submit= {this.submitSearch}/>
          </div>
        </header>
        <div className='content-wrapper'>
          <NewEntry getShit={this.getShit}/>
          <div className='button-wrapper'>
           Links: {displayLinks}
          </div>
          <div className="gif">
            <button onClick={()=> this.bored()}>Bored?</button><br/>
            <img src={this.state.gif} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
