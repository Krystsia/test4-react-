import React, {Component} from 'react';
import {render} from 'react-dom';
import './style.css';
import TestWidget from "./test-widget/TestWidget";

class App extends Component {
    render() {
        return (
            <div className="main">
                <h1 className="title">
                    Тестовое задание 4
                </h1>
                <TestWidget/>
            </div>
        );
    }
}

render(<App/>, document.getElementById('root'));
