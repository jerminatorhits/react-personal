import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './TravelPhotos.css';

class HorizontalPhoto extends Component {
  render() {
    return (
      <div className="img-box">
          <a href={this.props.url} className="img-thumbnail html5lightbox" data-group="travel" title={this.props.title}>
            <div className={`hide-overflow${this.props.centerMe ? ' center-me' : ''}`}>
              <Image src={this.props.url} alt={this.props.title} width="152" height="118" />
            </div>
          </a>
        <h4>{this.props.title}</h4>
      </div>
    );
  }
}

export default HorizontalPhoto;
