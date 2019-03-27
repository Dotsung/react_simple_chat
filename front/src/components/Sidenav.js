// @flow
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import './Sidenav.css';



class Sidenav extends Component {
    render() {
        return (
            <div>
                <div class="sidenav">
                    <a href="#"><Avatar className="avatar">H</Avatar></a>
                    <a href="#">Services</a>
                    <a href="#">Clients</a>
                    <a href="#">Contact</a>
                </div>
            </div>
        );
    }
}

export default Sidenav;