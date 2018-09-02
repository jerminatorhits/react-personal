import React, { Component } from 'react';
import './style.css';
class Footer extends Component {
  render() {
    return (
			<footer className="page-footer footer font-small stylish-color-dark pt-4 mt-4">
		    <div className="footer-copyright py-3 text-center">
	        © 2018 Copyright:
	        <a href="http://www.jeremykwa.com"> www.jeremykwa.com </a>
		    </div>
			</footer>
    );
  }
}

export default Footer;
