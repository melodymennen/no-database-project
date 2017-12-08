import React, { Component } from 'react';
import Day from './day';

class Week extends Component {
    constructor(){
        super()
    }


    render() {
        return (
            <Day date='Dec 8, 2017'/>
        )
    }
}

export default Week;
