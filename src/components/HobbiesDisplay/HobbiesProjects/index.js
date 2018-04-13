import React, { Component } from 'react';
import { Panel, Media, Jumbotron, Clearfix, Grid, Row, Col, Image } from 'react-bootstrap';
import ProjectItem from './ProjectItem';
import './style.css';

class HobbiesProjects extends Component {
  render() {

    const project1 = {
      name: "YouTube Music Player",
      image: "https://c1.staticflickr.com/4/3667/33147896051_c0e65dcb7c_b.jpg",
      technologies: "ReactJS, Redux, NodeJS, Firebase",
      description: "Website that makes it easy to listen to music from YouTube"
    }

    const project2 = {
      name: "Twitter Clone",
      image: "https://c1.staticflickr.com/4/3667/33147896051_c0e65dcb7c_b.jpg",
      technologies: "HTML5, CSS3 Bootstrap, Ruby On Rails, Postgresql",
      description: "Replica of Twitter"
    }

    const project3 = {
      name: "Boba Time",
      image: "https://lh3.googleusercontent.com/XJtf6o2fXpJnY3VLUwoHp2XNB9ZJx-NgyMUfYjLD1WA5Su4Amf-4r9I3oJXasOtKJOg=s360-rw",
      technologies: "Android Studio, Java, Yelp API, Google Maps API",
      description: "Android App that finds nearby boba drinks"
    }

    const project4 = {
      name: "Smarkets Event Fetcher",
      image: "https://c1.staticflickr.com/4/3667/33147896051_c0e65dcb7c_b.jpg",
      technologies: "ReactJS, NodeJS, Smarkets API",
      description: "Website that fetches popular data of current events"
    }

    const project5 = {
      name: "Blog",
      image: "https://c1.staticflickr.com/4/3669/32432775834_01053773c5_b.jpg",
      technologies: "HTML5, CSS3 Bootstrap, Javascript, Ruby On Rails",
      description: "Standard blog website"
    }

    const project6 = {
      name: "New Project",
      image: "https://c1.staticflickr.com/4/3667/33147896051_c0e65dcb7c_b.jpg",
      technologies: "Something cool",
      description: "Website that finds nearby burritos"
    }

    return (
    	<Panel className="make-transparent">
        <Panel.Heading>
          <Panel.Title componentClass="h3"><h1>Portfolio</h1></Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <div className="panel-padding">
          	<Grid fluid>
		          <Row className="show-grid justify-content-center">
		            <Col className="centerBlock" sm={6} md={4}>
		              <ProjectItem name={project1.name} image={project1.image} technologies={project1.technologies} description={project1.description}/>
		            </Col>
		            <Col className="centerBlock" sm={6} md={4}>
		              <ProjectItem name={project2.name} image={project2.image} technologies={project2.technologies} description={project2.description}/>
		            </Col>
		            <Col className="centerBlock" sm={6} md={4}>
		              <Media className="project-container-style">
		                <Media.Heading id="center-boba-app-pic" align="top">
		                  <img width={140} height={140} src={project3.image} alt="thumbnail" />
		                  </Media.Heading>
		                  <Media.Body>
		                    <Media.Heading>{project3.name}</Media.Heading>
		                    <div className="project-technologies">
		                      <h4>{project3.description}</h4>
		                    </div>
		                </Media.Body>
		              </Media>  
		            </Col>
		            <Col className="centerBlock" sm={6} md={4}>
		              <ProjectItem name={project4.name} image={project4.image} technologies={project4.technologies} description={project4.description}/>
		            </Col>
		            <Col className="centerBlock" sm={6} md={4}>
		              <ProjectItem name={project5.name} image={project5.image} technologies={project5.technologies} description={project5.description}/>
		            </Col>
		            <Col className="centerBlock" sm={6} md={4}>
		              <ProjectItem name={project6.name} image={project6.image} technologies={project6.technologies} description={project6.description}/>
		            </Col>
		          </Row>
		        </Grid>
          </div>
        </Panel.Body>
      </Panel>
    );
  }
}

export default HobbiesProjects;
