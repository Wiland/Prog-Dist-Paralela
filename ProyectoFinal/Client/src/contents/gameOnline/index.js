import React, { Component } from 'react';
import Results from '../../components/results';
import './styles.css';

class contentApp extends Component {
    render() {
        return (
            <div className="content">
                <Results />
            </div>
        );
    }
}

export default contentApp;
