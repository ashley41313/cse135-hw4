import React from 'react';
import './App.css';
import 'firebase/auth';
import Speed from './Speed';
import Browsers from './Browsers';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";

export default class Dashboard extends React.Component {
    render() {
        return(
            <Router>
                <div id="inner">   
                    <p>User signed in. Access Granted.</p>
                    <Link to="/reports/speed">Load Speed Component</Link>
                    <Link to="/reports/browsers">Load Browser Component</Link>

                    <Switch>
                        <Route path="/reports/speed">
                            <Speed />
                        </Route>
                        <Route path="/reports/browsers">
                            <Browsers />
                        </Route>
                    </Switch>
                </div>
            </Router>
        ); 
    }
} 
