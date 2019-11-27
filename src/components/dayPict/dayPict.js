import ServicePicNasa from '../../services/nasaApi';
import React, { Component } from 'react';
import { createSecurePair } from 'tls';

export default class DayPict extends Component {


    state = {
        url: null,
        title: null,
        explanation: null,
        date: null
    };

    constructor() {
        super();
        this.updatePicture();
    }
    apiNasa = new ServicePicNasa();
    updatePicture() {
        this.apiNasa.getPictOfDay()
            .then((picture) => {
                this.setState({
                    url: picture.url,
                    title: picture.title,
                    explanation: picture.explanation,
                    date: picture.date

                });
            });
    }
    render() {

        const { url, title, explanation, date } = this.state;


        return (
            <div className="pictBlock">
                <h1 className="header">Picture of the day</h1>
                <div className="row">
                    <div className="col-md-6">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <span className="header">Date:</span>
                                <span className="secondary"> {date}</span>
                            </li>
                            <li className="list-group-item">
                                <span className="header">Title:</span>
                                <span className="secondary"> {title}</span>
                            </li>
                            <li className="list-group-item">
                                <span className="header">Explanation:</span>
                                <span className="secondary">{explanation}</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <img src={url} alt={explanation}></img>
                    </div>
                </div>

            </div>
        )
    }

}


