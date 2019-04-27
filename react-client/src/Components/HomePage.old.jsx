import React, { Component } from 'react';
import picture from '../../dist/img/lcastro1.jpg';
import boardWP from '../../dist/img/board1.jpg';
import styles from '../../dist/styles.css';
import '../../dist/styles.css';

class HomePage extends Component {

    render() {
        const imgStyle  = { 'object-fit': 'fill' };
        const fitTight  = { padding: '0', border: '0', margin: '0', height: '100vh' };
        const centered  = { 'text-align': 'center', 'vertical-align': 'top' };
        const fillCard  = { height: '100vh', 'vertical-align': 'top' };
        const navFill   = { padding: '0' };
        const width     = { width: '100%' };
        const iconSize  = { 'font-size': '35px', 'padding-top': '10px', 'padding-left': '10px' };

        return (
            <div class="row" style={fitTight}>
                <div class='col s12 m4 l1 sidenav sidenav-fixed aligner' style={navFill} id='leftMenu'>
                    <div class='aligner-item' style={width}>
                        <ul>
                            <li><a href='/'> Home </a></li>
                            <li><a href='/'> About </a></li>
                            <li><a href='/'> Projects </a></li>
                            <li><a href='/'> Contact </a></li>
                        </ul>
                    </div>
                </div>

                <div id='mainScreen' class="col s12 m8 l11">
                    <div class='content' id='desktop'>
                        <div id='customCard' class="card horizontal hoverable">
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

                <div id='mobile' class='col s12 m8 l11'>
                    <a onClick={this.showNav}>
                        <i id='navBtn' class="material-icons left" style={iconSize}>menu</i>
                    </a>
                    <div class='card hoverable content' id='customCard'>
                        <div class='card-image'>
                            <img src={picture} id='cardImage'></img>
                        </div>
                        <div class='card-content'>
                            <p>
                                I'm Luis, welcome to my site! I'm a computer engineer,
                                web/app developer, and avid gamer.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default HomePage;
