import React, { Component } from 'react';
import { Panel, Image, Grid, Row, Col, Clearfix } from 'react-bootstrap';
import VideoUnit from './VideoUnit';

class HobbiesMusicProduction extends Component {
  render() {

    const video1 = {
      title: "When We Were Young",
      artist: "Adele",
      url: "https://www.youtube.com/watch?v=gVlKVVcOfnA",
      image: "https://i.ytimg.com/vi/gVlKVVcOfnA/hqdefault.jpg"
    }

    const video2 = {
      title: "Some Type Of Love",
      artist: "Charlie Puth",
      url: "https://www.youtube.com/watch?v=crjobmlnGKQ",
      image: "https://i.ytimg.com/vi/crjobmlnGKQ/hqdefault.jpg"
    }

    const video3 = {
      title: "This Town",
      artist: "Niall Horan",
      url: "https://www.youtube.com/watch?v=ni6ETCxtUOk",
      image: "https://i.ytimg.com/vi/ni6ETCxtUOk/hqdefault.jpg"
    }

    const video4 = {
      title: "Love Yourself",
      artist: "Justin Bieber",
      url: "https://www.youtube.com/watch?v=GvF7KqU7KTY",
      image: "https://i.ytimg.com/vi/GvF7KqU7KTY/hqdefault.jpg"
    }

    return (
      <Panel>
        <Panel.Heading>
          <Panel.Title componentClass="h3"><h1>Music Production</h1></Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <div className="panel-padding">
            <p>My musical training began at the age of 8 through weekly piano lessons. Since then, I've sang in a number of choirs and even joined an a cappella group in college. I spent my summers performing at a plaza weekly for a few hours at a time. I've found a joy in tinkering with the nuanced art of recording, mixing, and creating music in my home studio. Feel free to check out some of my projects listed below:</p>
            <Grid fluid>
              <Row>
                <Col xs={6} md={3}>
                   <VideoUnit video={video1} />
                </Col>
               <Col xs={6} md={3}>
                   <VideoUnit video={video2} />
                </Col>
                <Clearfix visibleXsBlock>
                </Clearfix>
                <Col xs={6} md={3}>
                   <VideoUnit video={video3} />
                </Col>
                <Col xs={6} md={3}>
                   <VideoUnit video={video4} />
                </Col>
              </Row>
            </Grid>

            <iframe width="100%" height="100" scrolling="no" frameborder="yes" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/267061613&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
          </div>
        </Panel.Body>
      </Panel>
    );
  }
}

export default HobbiesMusicProduction;
