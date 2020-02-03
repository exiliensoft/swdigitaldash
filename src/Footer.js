import React, {Component} from "react";


class Footer extends React.Component {
	render() {
		return (
			<div>
			

<footer className="footer-area mg-top-120" >
    <div className="footer-top pd-top-120 padding-bottom-40">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-9 col-lg-11">
                    <div className="footer-widget widget text-center">
                        <div className="footer_top_widget">
                            <a href="index.html" className="footer-logo"> 
                                <img src="assets/img/logo.png" alt="footer logo" />
                            </a>
                            <p>Our support team will get assistance from AI-powered, making it quicker than ever to handle support requests.</p>
                        </div>
                    </div>
                    <div className="footer-widget widget widget_nav_menu text-center">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Our Team</a></li>
                            <li><a href="#">Recent Projects</a></li>
                            <li><a href="#">Contact</a></li>
                         
                        </ul>
                    </div>
                    <div className="copyright-inner">
                        <div className="row custom-gutters-16">
                            <div className="col-lg-7">
                                <div className="copyright-text">
                                    &copy; Southwest Digital Dash 2020 All rights reserved
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <ul className="social-icon text-right">
                                    <li>
                                        <a className="dribbble" href="#"><i className="fa fa-dribbble  "></i></a>
                                    </li>
                                    <li>
                                        <a className="facebook" href="https://www.facebook.com/codingeek.net/" target="_blank"><i className="fa fa-facebook  "></i></a>
                                    </li>
                                    <li>
                                        <a className="twitter" href="https://twitter.com/codingeeknet" target="_blank"><i className="fa fa-twitter  "></i></a>
                                    </li>
                                    <li>
                                        <a className="linkedin" href="https://www.linkedin.com/company/codingeek/about/" target="_blank"><i className="fa fa-linkedin"></i></a>
                                    </li>
                                    <li>
                                        <a className="pinterest" href="https://www.instagram.com/codingeeknet/" target="_blank"><i className="fa fa-instagram"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>

<div className="back-to-top">
    <span className="back-top"><i className="fa fa-angle-up"></i></span>
</div>

			</div>
		);
	}
}

export default Footer;