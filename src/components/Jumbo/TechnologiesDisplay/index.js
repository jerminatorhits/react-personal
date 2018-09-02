import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import reactLogo from '../../../logos/react2.svg';
import reduxLogo from '../../../logos/redux.svg';
import html5Logo from '../../../logos/html5.svg';
import css3Logo from '../../../logos/css3.svg';
import javascriptLogo from '../../../logos/javascript.svg';
import rubyLogo from '../../../logos/ruby.svg';
import androidLogo from '../../../logos/android.svg';
import javaLogo from '../../../logos/java.svg';
import './style.css';

class TechnologiesDisplay extends Component {
  render() {
    return (
			<Grid>
				<Row>
					<Col xs={12} sm={12} md={6}>
			  		<Row>
			    		<Col className="relative" xs={6} sm={3} md={3}>
								<Image className="tech-photo App-logo" width={80} height={80} src={reactLogo}/>
			    		</Col>
			    		<Col className="relative" xs={6} sm={3} md={3}>
			      		<Image className="tech-photo App-logo" width={80} height={80} src={reduxLogo}/>
					    </Col>
					    <Col className="relative" xs={6} sm={3} md={3}>
					      <Image className="tech-photo App-logo" width={80} height={80} src={html5Logo}/>
					    </Col>
					    <Col className="relative" xs={6} sm={3} md={3}>
					      <Image className="tech-photo App-logo" width={80} height={80} src={css3Logo}/>
					    </Col>
					  </Row>
					</Col>
					<Col xs={12} sm={12} md={6}>
					  <Row>
					    <Col className="relative" xs={6} sm={3} md={3}>
					      <Image className="tech-photo App-logo" width={80} height={80} src={javascriptLogo}/>
					    </Col>
					    <Col className="relative" xs={6} sm={3} md={3}>
					      <Image className="tech-photo App-logo" width={80} height={80} src={rubyLogo}/>
					    </Col>
					    <Col className="relative" xs={6} sm={3} md={3}>
					      <Image className="tech-photo App-logo" width={80} height={80} src={androidLogo}/>
					    </Col>
					    <Col className="relative" xs={6} sm={3} md={3}>
					      <Image className="tech-photo App-logo" width={80} height={80} src={javaLogo}/>
					    </Col>
					  </Row>
				  </Col>
			  </Row>
			</Grid>
    );
  }
}

export default TechnologiesDisplay;