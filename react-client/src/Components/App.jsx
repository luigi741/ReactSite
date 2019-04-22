import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './HomePage';
import NavBar from './HeaderComponent/NavBar';
import Footer from './FooterComponent/Footer';
import SideNav from './SideNavComponent/SideNav';

class App extends Component {
    render() {
        return (
            <Router>
                <HomePage />
                <Route name="home" exact path="/" />
            </Router>
        )
    }
}

export default App;
