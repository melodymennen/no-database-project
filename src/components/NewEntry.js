import React, {Component} from 'react';
import axios from 'axios';

class NewEntry extends Component {
    constructor(){
        super()
        this.state ={
            date: '',
            link: '',
            complete: ''
        }

        this.handleDateChange = this.handleDateChange.bind(this)
        this.handleLinkChange = this.handleLinkChange.bind(this)
        this.handleCompleteChange = this.handleCompleteChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleDateChange(value){
        this.setState({date: value})
    }
    
    handleLinkChange(value){
        this.setState({link: value})
        
    }
    
    handleCompleteChange(value){
        this.setState({complete: value})

    }

    handleSubmit(){
        const body = {
            date: this.state.date,
            link: this.state.link,
            complete: this.state.complete
        }
        axios.post('http://localhost:3000/api/links', body)
    }


    render() {
        return (
            <div>
                <input onChange={event => this.handleDateChange(event.target.value)} />
                <input onChange={event => this.handleLinkChange(event.target.value)} />
                <select value={this.state.complete} onChange={event => this.handleCompleteChange(event.target.value)}>
                    <option value="inProgress">In Progress</option>
                    <option value="complete">Complete</option>
                </select>
                <button onClick={()=> this.handleSubmit()}>Submit</button>
            </div>
        )
    }
}

export default NewEntry;