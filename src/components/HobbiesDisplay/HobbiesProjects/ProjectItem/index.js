import React, { Component } from 'react';
import { Media } from 'react-bootstrap';
import './style.css';

class ProjectItem extends Component {
  render() {
    return (
      <Media className="project-container-style">
	    <Media.Heading align="top">
	      <img width={290} height={181} src={this.props.image} alt="thumbnail" />
	    </Media.Heading>
	    <Media.Body>
	      <Media.Heading>{this.props.name}</Media.Heading>
	      <div className="project-technologies">
	      	<h4>{this.props.description}</h4>
	      </div>
	    </Media.Body>
	  </Media>
    );
  }
}

export default ProjectItem;
