import React, { Component } from 'react';
import picture from '../../dist/img/board.jpg';
import styles from '../../dist/styles.css';

class HomePage extends Component {
    render() {
        const imgStyle = { 'max-width': '100%', height: 'auto' };
        const divStyle = { padding: '0', height: '100vh' };
        const fitTight = { padding: '0', border: '0', margin: '0' }

        return (
            <div class="row">
                <div class="col s12 m4 l3" style={divStyle}>
                    <div class="card hoverable" style={divStyle}>
                        <div class="card-content">
                            <span class="card-title">Card Title</span>
                            <p>I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively.</p>
                        </div>
                    </div>
                </div>
                <div class="col s12 m8 l9" style={divStyle}>
                    <img src={picture} style={imgStyle}></img>
                </div>
            </div>
        )
    }
}

export default HomePage;
