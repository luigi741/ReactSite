import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import picture from '../../../dist/img/lcastro1.jpg';

class SideNav extends Component {
    render() {
        var visible = {
            visibility: 'visible'
        };
        return (
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
        )
    }
}

export default SideNav
