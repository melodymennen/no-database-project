import React, { Component } from 'react';
import Day from './Day';

class Week extends Component {
    constructor(){
        super()
        this.state = {
            toggleOn: false
        }

        this.changeToggle = this.changeToggle.bind(this)
    }

    changeToggle() {
        this.setState({toggleOn: true})
    }


    render() {
        console.log(this.state.toggleOn)
        return (
            <div>
                <button onClick={() => this.changeToggle()}>Week </button>
                
            </div>
        )
    }
}

export default Week;
