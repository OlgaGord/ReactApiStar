import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import './nav.css';

export default class extends Component {

    render() {
        return (
            <div className="navbar-brand navbar-custom">
                <Link to="/">Home</Link>
                <Link to="/dayPict">Picture of the day</Link>
                <Link to="/marsPict">Mars pictures</Link>
                <Link to="/starWarsHeroes">Star wars practice</Link>
            </div>
        );
    }

}
