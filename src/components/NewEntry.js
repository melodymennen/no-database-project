import React, {Component} from 'react';
import axios from 'axios';
import Button from './Button'

class NewEntry extends Component {
    constructor(){
        super()
        this.state ={
            id: '',
            week: '',
            day: '',
            link: '',
            status: 'In Progress'
        }

        this.handleWeekChange = this.handleWeekChange.bind(this)
        this.handleDayChange = this.handleDayChange.bind(this)
        this.handleLinkChange = this.handleLinkChange.bind(this)
        this.handleStatusChange = this.handleStatusChange.bind(this)
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
    
    handleStatusChange(value){
        this.setState({status: value})

    }

    handleSubmit(){
        const body = {
            id: this.state.id,
            week: this.state.week,
            day: this.state.day,
            link: this.state.link,
            status: this.state.status
        }
        axios.post('http://localhost:3000/api/links', body).then(response => {
            this.setState({id: '', week: '', day: '', link: '', status: 'In Progress'})
            this.props.getShit()
        })
    }
    
    
    render() {
       
        return (
            <div>
                <input className='date' value={this.state.week} placeholder={'Week'} onChange={event => this.handleWeekChange(event.target.value)} />
                <input className='date' value={this.state.day} placeholder={'Day'} onChange={event => this.handleDayChange(event.target.value)} />
                <input className='link' value={this.state.link} placeholder={'Project Link'} onChange={event => this.handleLinkChange(event.target.value)} />
                <select value={this.state.status} onChange={event => this.handleStatusChange(event.target.value)}>
                    <option value="inProgress">In Progress</option>
                    <option value="Complete">Complete</option>
                </select>
                <Button onClick={()=> this.handleSubmit()}>Submit</Button>
            </div>
        )
    }
}

export default NewEntry;