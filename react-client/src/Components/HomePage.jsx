import React, { Component } from 'react';
import picture from '../../dist/img/lcastro1.jpg';
import boardWP from '../../dist/img/board1.jpg';
import styles from '../../dist/styles.css';
import '../../dist/styles.css';

class HomePage extends Component {

    // Set the width of the side navigation to 250px and the left margin of the page content to 250px
    openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        document.getElementById('mobileMenu').style.display = 'none';
    }

    render() {

        const circPic = { height: '100%', width: '100%', 'object-fit': 'contain' };
        const roundCard = { 'border-radius': '5px'}

        return (
            <div id='main'>
                <div>
                    <a id='mobileMenu' onClick={this.openNav}>
                        <i class='material-icons'>menu</i>
                    </a>
                </div>
                <div class='content'>
                    <div class='card hoverable' style={roundCard}>
                        <div class='card-image'>
                            <img id='myPic' src={picture}></img>
                        </div>
                        <div class='card-content'>
                            <p> Hi, I'm Luis and welcome to my site!</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;
