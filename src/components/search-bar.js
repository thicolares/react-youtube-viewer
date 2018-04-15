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
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value) }
                />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

}

// any code that imports search-bar, will have access only to SearchBar
export default SearchBar;

