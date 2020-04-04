import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import './Main.css';

export default class App extends Component
{
    render()
    {
        return (
            <Fragment>
                Hello, world!
            </Fragment>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#app'));
