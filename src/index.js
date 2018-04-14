import React from 'react';
// go find the library react and assign it to the variable React

import ReactDOM from 'react-dom';
// actually render the DOM is in a separated library


// Create a new component
// This component should produce some HTML
const App = function() {
    return <div>Hi!</div>;
}

// Take this component's generated HTML
// and put it on the page (in the DOM)
ReactDOM.render(App)