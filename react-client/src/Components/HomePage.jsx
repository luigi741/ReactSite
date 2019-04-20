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
        return (
            <div class='container'>
                <br/>
                <br/>
                <div class='row'>
                    <div class='col s3'></div>
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
        )
    }
}

export default HomePage;
