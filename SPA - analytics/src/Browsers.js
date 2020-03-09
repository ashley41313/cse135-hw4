import React from 'react';
import './App.css';
import 'firebase/auth';

export default class Browsers extends React.Component {
    render() {
        return (
            <div
            style={{
                backgroundColor: 'pink',
                width: '100%',
                height: '500px'
            }}>
                <h1>Browser component ... LOADED</h1>
                <p>Will get from database</p>
                <p>replace with some table</p>
            </div>
        );
    }
}