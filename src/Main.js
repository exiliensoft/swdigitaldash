import React from 'react';
import Home from './Home';
import Team from './Team';
import Recent from './Recent';
import Contact from './Contact';
import {Switch, Route, NavLink, BrowserRouter as Router} from "react-router-dom";

class Main extends React.Component {
	render() {
		return (
			
			<div>
				<Router>
				<div className="header">
					<nav className="navbar navbar-area navbar-expand-lg nav-style-01">
						<div className="container nav-container">
							<div className="responsive-mobile-menu">
								<div className="logo-wrapper mobile-logo">
									<NavLink to="#" className="logo">
										<img src="assets/img/logo.png" alt="logo" />
									</NavLink>
								</div>

								<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Riyaqas_main_menu"
									aria-expanded="false" aria-label="Toggle navigation">
									<span className="navbar-toggle-icon">
										<span className="line"></span>
										<span className="line"></span>
										<span className="line"></span>
									</span>
								</button>
							</div>
							<div className="collapse navbar-collapse" id="Riyaqas_main_menu">
								<div className="logo-wrapper desktop-logo">
									<NavLink to="index.html" className="logo">
										<img src="assets/img/logo.png" alt="logo" />
									</NavLink>
								</div>
								
								<ul className="navbar-nav">
									<li>
										<NavLink exact to="/">Home</NavLink>
									</li>
									<li>
										<NavLink to="/team">Our Team</NavLink>
									</li>
									<li>
										<NavLink to="/recent">Recent Projects</NavLink>
									</li>
									<li>
										<NavLink to="/contact">Contact</NavLink>
									</li>
								</ul>
							</div>
						</div>
					</nav>
				</div>
				<div className="content">
					<Switch>
					<Route exact path="/" component={Home}></Route>
					<Route path="/team" component={Team}></Route>
					<Route path="/recent" component={Recent}></Route>
					<Route path="/contact" component={Contact}></Route>
					</Switch>
				</div>
				
				<div className="Footer">
					<footer className="footer-area mg-top-120" >
						<div className="footer-top pd-top-120 padding-bottom-40">
							<div className="container">
								<div className="row justify-content-center">
									<div className="col-xl-9 col-lg-11">
										<div className="footer-widget widget text-center">
											<div className="footer_top_widget">
												<NavLink to="index.html" className="footer-logo">
													<img src="assets/img/logo.png" alt="footer logo" />
												</NavLink>
												<p>Our support team will get assistance from AI-powered, making it quicker than ever to handle support requests.</p>
											</div>
										</div>
										<div className="footer-widget widget widget_nav_menu text-center">
											<ul>
												<li><NavLink to="#">Home</NavLink></li>
												<li><NavLink to="#">Our Team</NavLink></li>
												<li><NavLink to="#">Recent Projects</NavLink></li>
												<li><NavLink to="#">Contact</NavLink></li>

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
															<NavLink className="dribbble" to="#"><i className="fa fa-dribbble  "></i></NavLink>
														</li>
														<li>
															<NavLink className="facebook" to="https://www.facebook.com/codingeek.net/" target="_blank"><i className="fa fa-facebook  "></i></NavLink>
														</li>
														<li>
															<NavLink className="twitter" to="https://twitter.com/codingeeknet" target="_blank"><i className="fa fa-twitter  "></i></NavLink>
														</li>
														<li>
															<NavLink className="linkedin" to="https://www.linkedin.com/company/codingeek/about/" target="_blank"><i className="fa fa-linkedin"></i></NavLink>
														</li>
														<li>
															<NavLink className="pinterest" to="https://www.instagram.com/codingeeknet/" target="_blank"><i className="fa fa-instagram"></i></NavLink>
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
				</Router>
			</div>
			
		);
	}
}

export default Main;
