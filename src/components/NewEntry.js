import React from 'react';

class NewEntry extends Component {
    constructor(){
        super()
        this.state ={
            date: '',
            link: '',
            complete: ''
        }
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


    render() {
        return (
            <input />
            <input />
            <input type='checkbox' />
        )
    }
}

export default NewEntry;