import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

class AboutPage extends Component {

    render() {
        const myStyle = { 'margin-left': '250px' };
        const pics = { height: 'auto', width: '50%', position: 'absolute', left: '25%',
            'margin-top': '100px'
        }
        return(
            <div>
                <div style={pics}>
                    <Carousel>
                        <div><img src="https://i.imgur.com/VjIrqet.jpg"/></div>
                        <div><img src="https://i.imgur.com/oCIfZPR.jpg"/></div>
                        <div><img src="https://imgur.com/kJDmDD4.jpg"/></div>
                        <div><img src="https://i.imgur.com/UYtA7bC.jpg"/></div>
                    </Carousel>
                    <p>Here's some placeholder text for this page.</p>
                </div>
            </div>
        )
    }
}

export default AboutPage
