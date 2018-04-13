import React, { Component } from 'react';
import Navigation from './Navigation';
import Jumbo from './Jumbo';
import HobbiesDisplay from './HobbiesDisplay';
import Footer from './Footer';
import Spacer from './Spacer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Navigation />
          <Spacer />
          <Jumbo />
          <Spacer />
          <HobbiesDisplay />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
