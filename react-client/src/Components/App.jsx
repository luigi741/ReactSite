import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './HomePage';
import NavBar from './HeaderComponent/NavBar';
import Footer from './FooterComponent/Footer';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <NavBar />
                    <HomePage />
                    <Route name="home" exact path="/" />
                </div>
            </Router>
        )
    }
}

export default App;
