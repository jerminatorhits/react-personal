import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import HorizontalPhoto from './HorizontalPhoto';
import VerticalPhoto from './VerticalPhoto';
import './TravelPhotos.css';

class TravelPhotos extends Component {
  render() {

    const Paris = {
      title: "Paris",
      url: "https://c1.staticflickr.com/1/660/33147889761_f06d4e67cf_b.jpg"
    }

    const Amsterdam = {
      title: "Amsterdam",
      url: "https://c1.staticflickr.com/1/578/32432767454_1d3c82c69d_b.jpg"
    }

    const Kraków = {
      title: "Kraków",
      url: "https://c1.staticflickr.com/4/3940/33147894141_66a2f5f6e6_b.jpg"
    }

    const Prague = {
      title: "Prague",
      url: "https://c1.staticflickr.com/4/3945/33147903821_54d5e44053_b.jpg"
    }

    const Vienna = {
      title: "Vienna",
      url: "https://c1.staticflickr.com/3/2856/32432831994_33b5de01d9_b.jpg"
    }

    const Budapest = {
      title: "Budapest",
      url: "https://c1.staticflickr.com/4/3840/32432780554_9fe8140031_b.jpg"
    }

    const London = {
      title: "London",
      url: "https://c1.staticflickr.com/4/3718/33275925165_5d81897101_b.jpg"
    }

    const Berlin = {
      title: "Berlin",
      url: "https://c1.staticflickr.com/1/639/32461129833_3b7cf2ff1f_b.jpg"
    }

    return (
      <div className="img-container">
        <Grid className="bound-container">
          <Row>
            <Col xs={6} md={3}>
              <VerticalPhoto title={Paris.title} url={Paris.url} />
            </Col>
            <Col xs={6} md={3}>
              <VerticalPhoto title={Amsterdam.title} url={Amsterdam.url} />
            </Col>
            <Col xs={6} md={3}>
              <VerticalPhoto title={Kraków.title} url={Kraków.url} />
            </Col>
            <Col xs={6} md={3}>
              <VerticalPhoto title={Prague.title} url={Prague.url} />
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={3}>
              <HorizontalPhoto title={Vienna.title} url={Vienna.url} />
            </Col>
            <Col xs={6} md={3}>
              <HorizontalPhoto title={Budapest.title} url={Budapest.url} centerMe={true} />
            </Col>
            <Col xs={6} md={3}>
              <HorizontalPhoto title={London.title} url={London.url} />
            </Col>
            <Col xs={6} md={3}>
              <HorizontalPhoto title={Berlin.title} url={Berlin.url} centerMe={true} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default TravelPhotos;
