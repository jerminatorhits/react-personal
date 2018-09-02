import React, { Component } from 'react';
import HobbiesProjects from './HobbiesProjects';
import HobbiesMusicProduction from './HobbiesMusicProduction';
import HobbiesTraveling from './HobbiesTraveling';

class HobbiesDisplay extends Component {
  render() {
    return (
      <div>
        <HobbiesProjects />
        <HobbiesMusicProduction />
        <HobbiesTraveling />
      </div>
    );
  }
}

export default HobbiesDisplay;
