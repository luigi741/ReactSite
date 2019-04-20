import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <header>
                <nav>
                    <div class="nav-wrapper">
                        <a href="#" class="brand-logo padLeft">Logo</a>
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            <li><a href="sass.html">Home</a></li>
                            <li><a href="badges.html">About</a></li>
                            <li><a href="collapsible.html">Projects</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

export default NavBar;
