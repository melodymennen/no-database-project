import React from 'react';

const Button = (props) => {
    return (
        <div>Week {props.week}</div>

        linkSearch() {
            // axios (GET)
            // setState with response -> buyersToDisplay
            let searchLetters = this.refs.searchLetters.value;
            axios.get(`http://localhost:3000/api/links?link=${searchLetters}`).then(response => this.setState({buyersToDisplay: response.data}))
          }
    )
}
export default Button;