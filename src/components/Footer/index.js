import React, { Component } from 'react';
import './style.css';
class Footer extends Component {
  render() {
    return (
			<footer class="page-footer footer font-small stylish-color-dark pt-4 mt-4">

			    <hr />

			    <div class="text-center py-3">
			        <ul class="list-unstyled list-inline mb-0">
			            <li class="list-inline-item">
			                <h5 class="mb-1">Email: jeremykwa@gmail.com</h5>
			            </li>
			            <li class="list-inline-item">
			                <a href="#!" class="btn btn-danger btn-rounded">Sign up!</a>
			            </li>
			        </ul>
			    </div>
			    <hr />

			    <div class="text-center">
			        <ul class="list-unstyled list-inline">
			            <li class="list-inline-item">
			                <a class="btn-floating btn-sm btn-fb mx-1">
			                    <i class="fa fa-facebook"> </i>
			                </a>
			            </li>
			            <li class="list-inline-item">
			                <a class="btn-floating btn-sm btn-tw mx-1">
			                    <i class="fa fa-twitter"> </i>
			                </a>
			            </li>
			            <li class="list-inline-item">
			                <a class="btn-floating btn-sm btn-gplus mx-1">
			                    <i class="fa fa-google-plus"> </i>
			                </a>
			            </li>
			            <li class="list-inline-item">
			                <a class="btn-floating btn-sm btn-li mx-1">
			                    <i class="fa fa-linkedin"> </i>
			                </a>
			            </li>
			            <li class="list-inline-item">
			                <a class="btn-floating btn-sm btn-dribbble mx-1">
			                    <i class="fa fa-dribbble"> </i>
			                </a>
			            </li>
			        </ul>
			    </div>
			    <div class="footer-copyright py-3 text-center">
			        © 2018 Copyright:
			        <a href="http://www.jeremykwa.com"> www.jeremykwa.com </a>
			    </div>
			</footer>
    );
  }
}

export default Footer;
