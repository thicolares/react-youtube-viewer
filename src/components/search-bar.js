import React, { Component } from 'react';

class SearchBar extends Component {
    // All js classes has the constructor function
    // reserved for doing some setup
    constructor(props) {
        // Call the constructor defined on the parent
        super(props);

        // This is the ONLY PLACE WHERE we set state like this: this.state.term = 'bli'. Always use this.setState()!!
        // but you can reference using this.state.term
        this.state = { term: '' }
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.term}
                    onChange={event => this.setState({ term: event.target.value }) }
                />
                Value of the input: {this.state.term}
            </div>
        );
    }

}

// any code that imports search-bar, will have access only to SearchBar
export default SearchBar;

