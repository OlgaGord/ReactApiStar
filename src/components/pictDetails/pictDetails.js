import React, { Component } from 'react';
import './pictDetails.css';

export default class PictDetails extends Component {

    state = {
        title: null,
        explanation: null,
        date: null
    }

    render() {
        return <h1 className="picDetails">Picture's details:</h1>
    }

}
