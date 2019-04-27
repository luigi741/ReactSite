import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './HomePage';
import NavBar from './HeaderComponent/NavBar';
import Footer from './FooterComponent/Footer';
import SideNav from './SideNavComponent/SideNav';
import AboutPage from './AboutPage';

class App extends Component {
    render() {
        return (
            <Router>
                <SideNav />
                <Route name='home' exact path='/' component={HomePage} />
                <Route name='about' exact path='/about' component={AboutPage} />
            </Router>
        )
    }
}

export default App;
