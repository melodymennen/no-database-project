import React, {Component} from 'react';
import axios from 'axios';

class NewEntry extends Component {
    constructor(){
        super()
        this.state ={
            week: '',
            day: '',
            link: '',
            complete: 'In Progress'
        }

        this.handleWeekChange = this.handleWeekChange.bind(this)
        this.handleDayChange = this.handleDayChange.bind(this)
        this.handleLinkChange = this.handleLinkChange.bind(this)
        this.handleCompleteChange = this.handleCompleteChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleWeekChange(value){
        this.setState({week: value})
    }

    handleDayChange(value){
        this.setState({day: value})
    }
    
    handleLinkChange(value){
        this.setState({link: value})
    }
    
    handleCompleteChange(value){
        this.setState({complete: value})

    }

    handleSubmit(){
        const body = {
            week: this.state.week,
            day: this.state.day,
            link: this.state.link,
            complete: this.state.complete
        }
        axios.post('http://localhost:3000/api/links', body).then(response => {
            this.setState({week: '', day: '', link: '', complete: 'In Progress'})
        })
    }


    render() {
        return (
            <div>
                <input className='date' value={this.state.week} placeholder={'Week'} onChange={event => this.handleWeekChange(event.target.value)} />
                <input className='date' value={this.state.day} placeholder={'Day'} onChange={event => this.handleDayChange(event.target.value)} />
                <input className='link' value={this.state.link} placeholder={'Project Link'} onChange={event => this.handleLinkChange(event.target.value)} />
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