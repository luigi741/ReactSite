import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import picture from '../../../dist/img/lcastro1.jpg';

class SideNav extends Component {

    // Set the width of the side navigation to 0 and the left margin of the page content to 0
    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.getElementById('mobileMenu').style.display = 'initial';
    }

    render() {
        const hide = { display: 'none' };
        return (
            <div id="mySidenav" class="customSideNav">
                <a id='closeButton' href="javascript:void(0)" class="closebtn" onClick={this.closeNav}>&times;</a>
                <a href='/'>
                    <i class='material-icons'>home</i>
                    Home
                </a>
                <a href="/about">
                    <i class='material-icons'>info</i>
                    About
                </a>
                <a href="#">
                    <i class='material-icons'>code</i>
                    Projects</a>
                <a href="#">
                    <i class='material-icons'>mail</i>
                    Contact
                </a>
            </div>
        )
    }
}

export default SideNav
