import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return <input onChange={this.onInputChange} />;
    }

    onInputChange(event) {
        console.log(event.target.value);
    }
}

// any code that imports search-bar, will have access only to SearchBar
export default SearchBar;

