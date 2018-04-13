import React, { Component } from 'react';
import { Fade, Grid, Row, Col, Image, Jumbotron, ClearFix } from 'react-bootstrap';
import TechnologiesDisplay from './TechnologiesDisplay';
import Spacer from '../Spacer';
import './style.css';

class Jumbo extends Component {
  render() {
    return (
      <Jumbotron>
			  <h1 className="jumbo-name">Hi There! I'm Jeremy</h1>
			  <Grid>
				  <Row className="show-grid">
				    <Col md={6} mdPush={6}>
				    	<h3 className="remove-top-margin">Full-Stack Software Engineer</h3>
				    	<p>I am a software engineer who loves solving problems from finding the fastest routes to optimizing credit card points. I have a Bachelor's Degree from UC San Diego and have recently finished a software consulting apprenticeship at <a href="https://8thlight.com/">8th Light</a>. Among watching Netflix and running, I enjoy recording music in my home studio and traveling the world.</p>
				    </Col>
				    <Col md={6} mdPull={6}>
				    	<Image id="jumbotron-picture" thumbnail src="https://c1.staticflickr.com/4/3770/33147826961_d0c7395321_b.jpg" />
				    </Col>
				  </Row>
				  <Spacer />
				  <Row className="show-grid">
				  	<TechnologiesDisplay />
				  </Row>
				</Grid>
			</Jumbotron>
    );
  }
}

export default Jumbo;