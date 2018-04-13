import React, { Component } from 'react';
import { Panel, Image } from 'react-bootstrap';
import './style.css';

class VideoUnit extends Component {
  render() {
    return (
      <div className="video-unit">
        <a href={this.props.video.url} className="html5lightbox" data-group="youtube-covers" data-thumbnail={this.props.video.image} onload=";__ytRIL(this)" title={this.props.video.title}>
          <div className="center-me">
            <Image className="crop-thumbnail" aria-hidden="true" data-ytimg="1" width="180" alt="" src={this.props.video.image} onload=";__ytRIL(this)" />
          </div>
        </a>
        <h5>{this.props.video.title}</h5>
        <h6>{this.props.video.artist}</h6>
      </div>
    );
  }
}

export default VideoUnit;
