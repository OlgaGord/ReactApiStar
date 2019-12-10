import React, { Component } from 'react';
// import { Player, PosterImage } from 'video-react';
import Youtube from 'react-youtube';


import DayPict from '../dayPict/dayPict';

export default class PlayerCustom extends Component {
    constructor(props) {
        super(props);
        // this.youtube_parser = this.youtube_parser.bind(this);
    }

    render() {
        const { videoUrl } = this.props;
        if (!videoUrl) {
            return null
        }
        // console.log(`url: ${videoUrl}`);

        return (
            <div>
                <Youtube videoId={videoUrl} />
            </div>

        )
    }
}