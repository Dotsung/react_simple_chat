// @flow
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Title from './Title';
import Sidenav from './Sidenav';
import MessageList from './MessageList';
import SendMessageForm from './SendMessageForm';

const DUMMY_DATA = [
    {
        senderId: "perborgen",
        text: "who'll win?"
    },
    {
        senderId: "janedoe",
        text: "who'll win?"
    }
]

class App extends Component {

    constructor() {
        super()
        this.state = {
            messages: DUMMY_DATA
        }
    }

    render() {
        return (
            <div>
                <Title />
                <Sidenav />
                <MessageList messages={this.state.messages} />
                <SendMessageForm />
            </div>
        );
    }
}

export default App;