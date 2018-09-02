import React, { Component } from 'react';
import { Panel, Media, Grid, Row, Col } from 'react-bootstrap';
import ProjectItem from './ProjectItem';
import './style.css';

class HobbiesProjects extends Component {
  render() {
    const project1 = {
      name: "YouTube Music Player",
      image: "https://farm1.staticflickr.com/788/39651776330_1a863b1c08_z.jpg",
      technologies: "ReactJS, Redux, NodeJS, Firebase",
      description: "Website to easily listen to music via YouTube",
      url: "https://youtubemusicplayer.herokuapp.com/"
    }

    const project2 = {
      name: "Twitter Clone",
      image: "https://farm1.staticflickr.com/874/27590179688_7d9bc47f4f_z.jpg",
      technologies: "HTML5, CSS3 Bootstrap, Ruby On Rails, Postgresql",
      description: "Replica of Twitter",
      url: "https://rails-tutorial-jk-sample-app.herokuapp.com/"
    }

    const project3 = {
      name: "Boba Time",
      image: "https://lh3.googleusercontent.com/XJtf6o2fXpJnY3VLUwoHp2XNB9ZJx-NgyMUfYjLD1WA5Su4Amf-4r9I3oJXasOtKJOg=s360-rw",
      technologies: "Android Studio, Java, Yelp API, Google Maps API",
      description: "Android App that finds nearby boba drinks",
      url: "https://play.google.com/store/apps/details?id=com.jeremykwa.www.bobatime&hl=en_US"
    }

    const project4 = {
      name: "Smarkets Event Fetcher",
      image: "https://farm1.staticflickr.com/863/40568275185_6bd44af847_z.jpg",
      technologies: "ReactJS, NodeJS, Smarkets API",
      description: "Website that fetches popular sporting event data",
      url: "https://smarkets-test-app.herokuapp.com/"
    }

    const project5 = {
      name: "Blog",
      image: "https://c1.staticflickr.com/4/3669/32432775834_01053773c5_b.jpg",
      technologies: "HTML5, CSS3 Bootstrap, Javascript, Ruby On Rails",
      description: "Standard blog website",
      url: "https://stormy-peak-17975.herokuapp.com/"
    }

    const project6 = {
      name: "Coming Soon: Burrito Finder",
      image: "https://c1.staticflickr.com/4/3667/33147896051_c0e65dcb7c_b.jpg",
      technologies: "ReactJS, Redux, Google Maps API, Yelp API",
      description: "Website that finds nearby burritos"
    }

    return (
    	<Panel id="portfolio" className="make-transparent">
        <Panel.Heading className="panel-heading">
          <Panel.Title><h1>Portfolio</h1></Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <Grid fluid>
            <Row className="show-grid justify-content-center">
              <Col className="centerBlock" sm={6} md={4}>
                <ProjectItem
                  name={project1.name}
                  image={project1.image}
                  technologies={project1.technologies}
                  description={project1.description}
                  url={project1.url} />
              </Col>
              <Col className="centerBlock" sm={6} md={4}>
                <ProjectItem
                  name={project2.name}
                  image={project2.image}
                  technologies={project2.technologies}
                  description={project2.description}
                  url={project2.url} />
              </Col>
              <Col className="centerBlock" sm={6} md={4}>
                <Media className="project-container-style">
                <Media.Heading id="center-boba-app-pic" align="top">
                  <img width={140} height={140} src={project3.image} alt="thumbnail" />
                </Media.Heading>
                  <Media.Body className="media-body">
                    <Media.Heading>{project3.name}</Media.Heading>
                    <div className="project-technologies">
                      <h4>{project3.technologies}</h4>
                    </div>
                  </Media.Body>
                  <a href={project3.url}>
                    <div className="overlay">
                      <div className="overlay-text">{project3.description}</div>
                    </div>
                  </a>
                </Media>
              </Col>
              <Col className="centerBlock" sm={6} md={4}>
                <ProjectItem
                  name={project4.name}
                  image={project4.image}
                  technologies={project4.technologies}
                  description={project4.description}
                  url={project4.url} />
              </Col>
              <Col className="centerBlock" sm={6} md={4}>
                <ProjectItem
                  name={project5.name}
                  image={project5.image}
                  technologies={project5.technologies}
                  description={project5.description}
                  url={project5.url} />
              </Col>
              <Col className="centerBlock" sm={6} md={4}>
                <ProjectItem
                  name={project6.name}
                  image={project6.image}
                  technologies={project6.technologies}
                  description={project6.description}
                  url={project6.url} />
              </Col>
            </Row>
          </Grid>
        </Panel.Body>
      </Panel>
    );
  }
}

export default HobbiesProjects;
