import React, { Component } from 'react';
import picture from '../../dist/img/lcastro1.jpg';
import styles from '../../dist/styles.css';

class HomePage extends Component {
    render() {
        const myStyle = {
            width: '50%',
            height: 'auto',
            'object-fit': 'cover'
        }
        const visible = {
            visibility: 'visibile'
        };
        const cardSpan = {
            height: '100vh'
        }
        return (
            <main style={cardSpan}>
                <div class='container' style={cardSpan}>
                    <div class='row'>
                        <div class='col s3'>
                            <ul id="slide-out" class="sidenav sidenav-fixed" style={visible}>
                                <li>
                                    <div class="user-view">
                                        <div class="background">
                                            <img class="background"></img>
                                        </div>
                                        <a href="#user">
                                            <img class="circle"></img>
                                        </a>
                                        <a href="#name"><span class="white-text name">John Doe</span></a>
                                        <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>
                                    </div>
                                </li>
                                <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
                                <li><a href="#!">Second Link</a></li>
                                <li>
                                    <div class="divider"></div>
                                </li>
                                <li><a class="subheader">Subheader</a></li>
                                <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
                            </ul>
                        </div>
                        <div class='col s6'>
                            <div class="card horizontal hoverable">
                                <div class="card-image">
                                    <img src={picture}></img>
                                </div>
                                <div class="card-stacked">
                                    <div class="card-content">
                                        <p>
                                            Greetings, my name's Luis, welcome to my personal site!
                                            I love all things computer-related, including hardware and sofware.
                                            I studied Computer Engineering at the University of South Florida.
                                            Gaming is also a huge part of my life, I've been gaming since I could
                                            hold a controller as a kid
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='col s3'></div>
                    </div>
                </div>
            </main>
        )
    }
}

export default HomePage;
