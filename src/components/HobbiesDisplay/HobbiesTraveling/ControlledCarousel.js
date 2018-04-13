import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

class ControlledCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >
        <Carousel.Item>
          <img width={200} height={125} src="https://c1.staticflickr.com/1/660/33147889761_f06d4e67cf_b.jpg" alt="Paris slide" />
          <Carousel.Caption>
            <h3>Paris</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={200} height={125} src="https://c1.staticflickr.com/1/578/32432767454_1d3c82c69d_b.jpg" alt="Amsterdam slide" />
          <Carousel.Caption>
            <h3>Paris</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={200} height={125} src="https://c1.staticflickr.com/1/639/32461129833_3b7cf2ff1f_b.jpg" alt="Berlin slide" />
          <Carousel.Caption>
            <h3>Paris</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={200} height={125} src="https://c1.staticflickr.com/4/3840/32432780554_9fe8140031_b.jpg" alt="Budapest slide" />
          <Carousel.Caption>
            <h3>Paris</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={200} height={125} src="https://c1.staticflickr.com/4/3718/33275925165_5d81897101_b.jpg" alt="London slide" />
          <Carousel.Caption>
            <h3>Paris</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default ControlledCarousel;