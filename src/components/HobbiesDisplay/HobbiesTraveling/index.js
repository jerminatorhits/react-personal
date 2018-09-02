import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import TravelPhotos from './TravelPhotos';
import Spacer from '../../Spacer';

class HobbiesTraveling extends Component {
  render() {
    return (
      <Panel id="traveling">
        <Panel.Heading>
          <Panel.Title><h1>Traveling</h1></Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <div className="panel-padding">
            <p>I love seeing new places and meeting new people, especially through travel. It enjoy learning and understanding life through other people's experience. I've learned much about myself and what makes other people passionate. Here are some of the places I've visited:</p>
          <Spacer height={30}/>
          <TravelPhotos />
          </div>
        </Panel.Body>
      </Panel>
    );
  }
}

export default HobbiesTraveling;
