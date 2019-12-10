import ServicePicNasa from '../../services/nasaApi';
import React, { Component } from 'react';
import PlayerCustom from '../player/PlayerCustom';


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

    youtube_parser(url) {

        let regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
        let match = url.match(regExp);
        let videoIdMatch = (match && match[7].length == 11) ? match[7] : false
        return videoIdMatch;

    }

    render() {

        const { url, title, explanation, date } = this.state;

        if (!url) {
            return null
        }

        const ifVideoUrl = this.youtube_parser(url);

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
                        {ifVideoUrl ? <PlayerCustom videoUrl={this.youtube_parser(url)} /> :
                            <div>
                                <img src={url} alt={title}></img>
                            </div>}


                    </div>
                </div>

            </div>
        )
    }

}


