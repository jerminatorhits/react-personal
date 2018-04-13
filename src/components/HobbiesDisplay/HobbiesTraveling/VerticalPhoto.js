import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './TravelPhotos.css';

class VerticalPhoto extends Component {
  render() {
    return (
      <div class="img-box">
        <a href={this.props.url} class="img-thumbnail html5lightbox" data-group="travel" title={this.props.title}>
          <div className="hide-overflow"> 
            <Image src={this.props.url} alt={this.props.title} width="118" height="152" />
          </div>
        </a>
      <h4>{this.props.title}</h4>
      </div>
    );
  }
}

export default VerticalPhoto;
