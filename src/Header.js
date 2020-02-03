import React,{Component} from "react";
import {NavLink} from "react-router-dom";

class Header extends Component {
	render() {
		return(
		    
<div>


<nav className="navbar navbar-area navbar-expand-lg nav-style-01">
    <div className="container nav-container">
        <div className="responsive-mobile-menu">
            <div className="logo-wrapper mobile-logo">
                <a href="#" className="logo">
                    <img src="assets/img/logo.png" alt="logo" />
                </a>
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
                <a href="index.html" className="logo">
                    <img src="assets/img/logo.png" alt="logo" />
                </a>
            </div>
	  
            <ul className="navbar-nav">
                <li>
                    <a href="index.html">Home</a>
                </li>
                <li>
                    <a href="team.html">Our Team</a>
                </li>
                <li>
                    <a href="recent-projects.html">Recent Projects</a>
                </li>
                <li>
                    <a href="contact.html">Contact</a>
                </li>
            </ul>
		
	
        </div>
        
    </div>
</nav>



<div className="header-area header-bg">
    <div className="container">
        <div className="banner-slider banner-slider-one">
            <div className="banner-slider-item">
                <div className="row">
                    <div className="col-xl-5 col-lg-6 col-md-6 offset-xl-1">
                        <div className="header-inner-details">
                            <div className="header-inner">
                                <h1 className="title s-animate-1">Better <span>software</span> promotes sales & profits</h1>
                                <p className="s-animate-2">There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                                <div className="btn-wrapper desktop-left padding-top-20">
                                    <a href="#" className="btn btn-radius btn-green s-animate-3">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 hidden-sm">
                        <div className="banner-thumb-wrap">
                            <div className="banner-thumb">
                                <img className="header-inner-img" src="assets/img/banner/1.png" alt="banner-img" />
                                <img className="banner-1-img2" src="assets/img/banner/2.png" alt="banner-img" />
                                <img className="banner-1-img3" src="assets/img/banner/3.png" alt="banner-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner-slider-item">
                <div className="row">
                    <div className="col-xl-5 col-lg-6 col-md-6  offset-xl-1">
                        <div className="header-inner-details">
                            <div className="header-inner">
                                <h1 className="title s-animate-1">Crafting online <span>software</span> for you</h1>
                                <p className="s-animate-2">There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                                <div className="btn-wrapper desktop-left padding-top-20">
                                    <a href="#" className="btn btn-radius btn-green s-animate-3">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 hidden-sm">
                        <div className="banner-thumb-wrap">
                            <div className="banner-thumb">
                                <img className="header-inner-img" src="assets/img/banner/01.png" alt="banner-img" />
                                <img className="banner-1-img2" src="assets/img/banner/02.png" alt="banner-img" />
                                <img className="banner-1-img3" src="assets/img/banner/03.png" alt="banner-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner-slider-item">
                <div className="row">
                    <div className="col-xl-5 col-lg-6 col-md-6  offset-xl-1">
                        <div className="header-inner-details">
                            <div className="header-inner">
                                <h1 className="title s-animate-1">Most advantage <span>Technology</span></h1>
                                <p className="s-animate-2">There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                                <div className="btn-wrapper desktop-left padding-top-20">
                                    <a href="#" className="btn btn-radius btn-green s-animate-3">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 hidden-sm">
                        <div className="banner-thumb-wrap">
                            <div className="banner-thumb">
                                <img className="header-inner-img" src="assets/img/banner/1.png" alt="banner-img" />
                                <img className="banner-1-img2" src="assets/img/banner/2.png" alt="banner-img" />
                                <img className="banner-1-img3" src="assets/img/banner/03.png" alt="banner-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

		);
	}
}

export default Header;