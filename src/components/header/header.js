import React, { Component } from 'react';

import './header.css';
import Nav from '../nav/nav';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PicDetails from '../pictDetails/pictDetails';


export default class Header extends Component {

    render() {
        return (
            <Router>
                <Nav />
                <Route exact path="/" render={props => (<div>Home</div>)} />
                <Route path="/dayPict" render={props => (<div>Picture of the day</div>)} />
                <Route path="/marsPict" component={PicDetails} />
                <Route path="/starWarsHeroes" render={props => (<div>Star Wars Practice</div>)} />
            </Router>
        )

    }

}