import React from 'react';
import './App.css';
import 'firebase/auth';

export default class Speed extends React.Component {
    render() {
        return (
            <div
            style={{
                backgroundColor: 'pink',
                width: '100%',
                height: '500px'
            }}>
                <h1>Speed component ... LOADED</h1>
                <p>Will get from database</p>
                <p>replace with pie chart</p>
            </div>
        );
    }
}