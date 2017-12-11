import React, {Component} from 'react';
import axios from 'axios';
import Button from './Button';

class Search extends Component {

constructor(){
    super()
    this.state = {
        searchLetters: ''
    }

    this.linkSearch = this.linkSearch.bind(this)
   

}

    linkSearch(value) {
        this.setState({searchLetters: value})
    }
    
   
    render() {

        return (
            <div>
                <input placeholder= {'Search'} value= {this.state.searchLetters} onChange={event => this.linkSearch(event.target.value)}/>
                <Button onClick={() => this.props.submit(this.state.searchLetters)}>Submit</Button>
            </div>
        )
    }
}

export default Search;