import React, { Component } from 'react';
import picture from '../../dist/img/lcastro1.jpg';
import boardWP from '../../dist/img/board1.jpg';
import styles from '../../dist/styles.css';
import '../../dist/styles.css';

class HomePage extends Component {
    buttonAlert() {
        alert('YEET');
    }

    render() {
        const imgStyle  = { 'object-fit': 'fill' };
        const fitTight  = { padding: '0', border: '0', margin: '0', height: '100vh' };
        const centered  = { 'text-align': 'center', 'vertical-align': 'top' };
        const fillCard  = { height: '100vh', 'vertical-align': 'top' };
        const navFill   = { padding: '0' };

        return (
            <div class="row" style={fitTight}>
                <div class='col s12 m4 l2 sidenav sidenav-fixed' style={navFill}>
                    <ul>
                        <li><a href='/'> Home </a></li>
                        <li><a href='/'> About </a></li>
                        <li><a href='/'> Projects </a></li>
                        <li><a href='/'> Contact </a></li>
                    </ul>
                </div>
                <div id='mainScreen' class="col s12 m8 l10">
                    <div class='content'>
                        <div class="card horizontal hoverable">
                            <div class="card-image fill">
                                <img id='imgResize' src={picture}></img>
                            </div>
                            <div class="card-stacked">
                                <div class="card-content">
                                    <p>Greetings, welcome to my site!</p>
                                    <p>Thanks for stopping by, my name is</p>
                                    <p>Luis Castro. I'm a Computer Engineer,</p>
                                    <p>Web/App Developer, and avid gamer.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;
