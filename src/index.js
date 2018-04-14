import React from 'react';
// go find the library react and assign it to the variable React
/// Used to create and manage components

import ReactDOM from 'react-dom';
// Used to render the DOM (is in a separated library)

// Since it's our own code, not a external lib,
// we must to set the full reference so far
import SearchBar from './components/search-bar';

const API_KEY = process.env.YOUTUBE_API_KEY;

// Create a new component
// This component should produce some HTML
// THIS DO NOT CREATE A COMPONENT. JUST A TYPE (like a Class)
// You still need to instantiate it
const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    )
}
// or:
// const App = () => <div>Hi again!</div>


// Take this component's generated HTML
// and put it on the page (in the DOM)

// App --> stands for a TYPE of component. Like a class
// <App></App> OR <App /> --> INSTANTIATE a component

// And you must to set a target HTML element
ReactDOM.render(<App />, document.querySelector('.container'))