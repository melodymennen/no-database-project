import React, {Component} from 'react';
import axios from 'axios';

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
                <button onClick={() => this.props.submit(this.state.searchLetters)}>Submit</button>
            </div>
        )
    }
}

export default Search;