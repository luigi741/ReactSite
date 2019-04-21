import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../../dist/styles.css';

class NavBar extends Component {
    render() {
        return (
            <div class="sidenav">
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#clients">Clients</a>
                <a href="#contact">Contact</a>
            </div>
        )
    }
}

export default NavBar;
