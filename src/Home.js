import React from "react";
import { NavLink} from "react-router-dom";

class Content extends React.Component {
    render() {
        return (
            <div>
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
                                                    <NavLink to ="#" className="btn btn-radius btn-green s-animate-3">Read More</NavLink>
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
                                                    <NavLink to="#" className="btn btn-radius btn-green s-animate-3">Read More</NavLink>
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
                                                    <NavLink to="#" className="btn btn-radius btn-green s-animate-3">Read More</NavLink>
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
                <div className="service-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-7 col-lg-10">
                                <div className="section-title text-center margin-bottom-90">
                                    <h2 className="title wow animated fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.1s">What <span>Service</span> We are Providing?</h2>
                                    <p className="wow animated fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.2s">Offer your business with the best assistance for growth.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row custom-gutters-16">
                            <div className="col-xl-3 col-md-6 col-sm-6">
                                <div className="single-service wow animated fadeInUp" data-wow-duration="0.4s" data-wow-delay="0.1s">
                                    <img src="assets/img/service/project.png" alt="service" />
                                    <h6><NavLink to="#">Branding Idendity</NavLink></h6>
                                    <p>Our support team will get assistance from AI-powered suggestions, making it quicker than ever to handle support requests.</p>
                                    <div className="read-more">
                                        <NavLink to="#"><img src="assets/img/service/arrow.png" alt="arrow" /></NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 col-sm-6">
                                <div className="single-service wow animated fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.2s">
                                    <img src="assets/img/service/hiring.png" alt="service" />
                                    <h6><NavLink to="#">Business Consultancy</NavLink></h6>
                                    <p>Our support team will get assistance from AI-powered suggestions, making it quicker than ever to handle support requests.</p>
                                    <div className="read-more">
                                        <NavLink to="#"><img src="assets/img/service/arrow.png" alt="arrow" /></NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 col-sm-6">
                                <div className="single-service wow animated fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                                    <img src="assets/img/service/checklist.png" alt="service" />
                                    <h6><NavLink to="#">UI/UX - Design</NavLink></h6>
                                    <p>Our support team will get assistance from AI-powered suggestions, making it quicker than ever to handle support requests.</p>
                                    <div className="read-more">
                                        <NavLink to="#"><img src="assets/img/service/arrow.png" alt="arrow" /></NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 col-sm-6">
                                <div className="single-service wow animated fadeInUp" data-wow-duration="1s" data-wow-delay="0.4s">
                                    <img src="assets/img/service/analytics.png" alt="service" />
                                    <h6><NavLink to="#">Market Analysis</NavLink></h6>
                                    <p>Our support team will get assistance from AI-powered suggestions, making it quicker than ever to handle support requests.</p>
                                    <div className="read-more">
                                        <NavLink to="#"><img src="assets/img/service/arrow.png" alt="arrow" /></NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="sbs-what-riyaqas pd-default-120 mg-top-105" >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 wow animated fadeInRight" data-wow-duration="1s" data-wow-delay="0.3s">
                                <img src="assets/img/we-provide/5.png" alt="img" />
                            </div>
                            <div className="col-xl-5 col-lg-6 desktop-center-item">
                                <div className="desktop-center-area wow animated fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
                                    <div className="section-title style-two">
                                        <h2 className="title">What is <span>Southwest Digital Dash?</span></h2>
                                        <p>SoftBox One of the best Softwire Development company. SoftBox is at the forefront as the most innovative web development company. Our cost efficient and structured teamwork justifies our position. Our clients count on our offshore business</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="riyaqas-check-list">
                                                <img src="assets/img/icons/check.png" alt="check" />
                                                <span>Concept Design</span>
                                            </div>
                                            <div className="riyaqas-check-list">
                                                <img src="assets/img/icons/check.png" alt="check" />
                                                <span>Concept Implementation</span>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="riyaqas-check-list">
                                                <img src="assets/img/icons/check.png" alt="check" />
                                                <span>Concept Development</span>
                                            </div>
                                            <div className="riyaqas-check-list">
                                                <img src="assets/img/icons/check.png" alt="check" />
                                                <span>Testing work</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="sbs-talented-people mg-top-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-5 col-lg-6 offset-xl-1 desktop-center-item">
                                <div className="desktop-center-area">
                                    <div className="section-title style-three">
                                        <h2 className="title">300+ Talented People</h2>
                                        <p>Our support team will get assistance from AI-powered suggestions, making it quicker than ever to handle support requests.</p>
                                    </div>
                                    <div className="talented-pepole-list">
                                        <ul>
                                            <li>
                                                <h3 className="count-num">30</h3>
                                                <span>UI/UX Designer</span>
                                            </li>
                                            <li>
                                                <h3 className="count-num">228</h3>
                                                <span>Developer</span>
                                            </li>
                                            <li>
                                                <h3 className="count-num">8</h3>
                                                <span>Architect</span>
                                            </li>
                                            <li>
                                                <h3 className="count-num">30</h3>
                                                <span>Project Manager</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="world-map-wrap">
                                    <img src="assets/img/others/map.png" alt="map" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="sbs-provide-security pd-top-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-6 offset-xl-1 order-lg-12 wow animated fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
                                <div className="img-with-video">
                                    <div className="img-wrap">
                                        <img src="assets/img/we-provide/6.png" alt="video" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 order-lg-1 align-self-center wow animated fadeInRight" data-wow-duration="1s" data-wow-delay="0.3s">
                                <div className="section-title style-two">
                                    <h2 className="title"><span>Developers</span> First</h2>
                                </div>
                                <div className="riyaqas-stab">
                                    <ul className="nav nav-tabs">
                                        <li className="nav-item">
                                            <NavLink className="nav-link active" data-toggle="tab" to="#d_tabs_1">Digital</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" data-toggle="tab" to="#d_tabs_2">Curl</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" data-toggle="tab" to="#d_tabs_3">Resize</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" data-toggle="tab" to="#d_tabs_4">Doct</NavLink>
                                        </li>
                                    </ul>
                                    <div className="tab-content">
                                        <div className="tab-pane fade show active" id="d_tabs_1" >
                                            <div className="riyaqas-stab-content">
                                                <p>Southwest Digital Dash One of the best Software Development company. The forefront as the most innovative web development company. Our cost efficient and structured teamwork justifies our position. Our clients count on our offshore business solutions on a regular.</p>
                                                <p>From concept design to development, testing & implementation, our team is here to support and guide you every step of the way.</p>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="d_tabs_2">
                                            <div className="riyaqas-stab-content">
                                                <p>Southwest Digital Dash Two of the best Softwire Development company. The forefront as the most innovative web development company. Our cost efficient and structured teamwork justifies our position. Our clients count on our offshore business solutions on a regular.</p>
                                                <p>From concept design to development, testing & implementation, our team is here to support and guide you every step of the way.</p>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="d_tabs_3">
                                            <div className="riyaqas-stab-content">
                                                <p>Southwest Digital Dash Three of the best Softwire Development company. The forefront as the most innovative web development company. Our cost efficient and structured teamwork justifies our position. Our clients count on our offshore business solutions on a regular.</p>
                                                <p>From concept design to development, testing & implementation, our team is here to support and guide you every step of the way.</p>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="d_tabs_4">
                                            <div className="riyaqas-stab-content">
                                                <p>Southwest Digital Dash Four of the best Softwire Development company. The forefront as the most innovative web development company. Our cost efficient and structured teamwork justifies our position. Our clients count on our offshore business solutions on a regular.</p>
                                                <p>From concept design to development, testing & implementation, our team is here to support and guide you every step of the way.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="leftside-image-area service-area sbs-business-tool pd-bottom-120 mg-top-120" >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-xl-7 wow animated fadeInRight" data-wow-duration="1s" data-wow-delay="0.3s">
                                <img src="assets/img/business-tool/1.png" alt="img" />
                            </div>
                            <div className="col-xl-5 col-lg-6 desktop-center-item">
                                <div className="desktop-center-area wow animated fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
                                    <div className="section-title style-two">
                                        <h2 className="title">All kind of <span>Business <br /> tools</span> integration.</h2>
                                        <p>Our support team will get assistance from AI-powered suggestions, <br /> making it quicker than ever to handle support requests.</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-9">
                                            <div className="riyaqas-check-list media">
                                                <img className="media-left" src="assets/img/business-tool/pencil.png" alt="check" />
                                                <span>Our support team will get assistance from AI-powered suggestions, making it quicker than.</span>
                                            </div>
                                            <div className="riyaqas-check-list media">
                                                <img className="media-left" src="assets/img/business-tool/search.png" alt="check" />
                                                <span>Our support team will get assistance from AI-powered suggestions.</span>
                                            </div>
                                            <div className="riyaqas-check-list media mg-bottom-0-991">
                                                <img className="media-left" src="assets/img/business-tool/settings.png" alt="check" />
                                                <span>Our support team will get assistance from AI-powered, making it quicker than ever to handle support.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sbs-provide-security pd-top-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-6 order-lg-12 wow animated fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
                                <div className="img-with-video">
                                    <div className="img-wrap">
                                        <img src="assets/img/we-provide/1.png" alt="video" />
                                        <div className="hover">
                                            <NavLink to="https://www.youtube.com/watch?v=c7XEhXZ_rsk" className="video-play-btn mfp-iframe"><img src="assets/img/we-provide/3.png" alt="video" /></NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6 order-lg-1 align-self-center wow animated fadeInRight" data-wow-duration="1s" data-wow-delay="0.3s">
                                <div className="section-title style-two">
                                    <h2 className="title">How We Providing <br /> Strong <span>Security</span></h2>
                                    <p>Our support team will get assistance from AI-powered suggestions, making it quicker than ever to handle requests  to handle suggestions assistance it requests.</p>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="riyaqas-check-list">
                                            <img className="media-left" src="assets/img/icons/9.png" alt="check" />
                                            <span>Unique Design</span>
                                        </div>
                                        <div className="riyaqas-check-list">
                                            <img className="media-left" src="assets/img/icons/10.png" alt="check" />
                                            <span>Custom domain</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="riyaqas-check-list">
                                            <img className="media-left" src="assets/img/icons/11.png" alt="check" />
                                            <span>Mobile ready</span>
                                        </div>
                                        <div className="riyaqas-check-list">
                                            <img className="media-left" src="assets/img/icons/12.png" alt="check" />
                                            <span>Testing work</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="testimonial-section sbs-testimonial-section pd-top-105 pd-bottom-120" /* style="background-image:url(assets/img/bg/1h3.png);" */>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-5 col-lg-6 pd-xl-5 order-lg-12 align-self-center ">
                                <div className="section-title style-two mb-0">
                                    <h2 className="title">What Our <span>Client Say?</span></h2>
                                    <p>Our support team will get assistance from AI-powered <br /> suggestions, making it quicker than ever to handle support <br />requests. assistance from AI-powered</p>
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-1">
                                <div className="sbs-testimonial-slider">
                                    <div className="choose_slider">
                                        <div className="choose_slider_items">
                                            <ul id="testimonial-slider">
                                                <li className="current_item">
                                                    <div className="media">
                                                        <img className="media-left" src="assets/img/client/4.png" alt="client" />
                                                        <div className="media-body">
                                                            <h6>Wilson Mojika</h6>
                                                            <p className="designation">Founder at todo</p>
                                                            <span>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <p>Our support team will get assistance from AI-powered suggestions, making it quicker than ever to handle support requests.</p>
                                                </li>
                                                <li className="current_item">
                                                    <div className="media">
                                                        <img className="media-left" src="assets/img/client/5.png" alt="client" />
                                                        <div className="media-body">
                                                            <h6>Ema Wilson</h6>
                                                            <p className="designation">CEO at craft</p>
                                                            <span>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <p>Our support team will get assistance from AI-powered suggestions, making it quicker than ever to handle support requests.</p>
                                                </li>
                                                <li className="current_item">
                                                    <div className="media">
                                                        <img className="media-left" src="assets/img/client/6.png" alt="client" />
                                                        <div className="media-body">
                                                            <h6>John Mojika</h6>
                                                            <p className="designation">CTO of Uxa</p>
                                                            <span>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <p>Our support team will get assistance from AI-powered suggestions, making it quicker than ever to handle support requests.</p>
                                                </li>
                                                <li className="current_item">
                                                    <div className="media">
                                                        <img className="media-left" src="assets/img/client/4.png" alt="client" />
                                                        <div className="media-body">
                                                            <h6>Refule Mia</h6>
                                                            <p className="designation">CEO at craft</p>
                                                            <span>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <p>Our support team will get assistance from AI-powered suggestions, making it quicker than ever to handle support requests.</p>
                                                </li>
                                                <li className="current_item">
                                                    <div className="media">
                                                        <img className="media-left" src="assets/img/client/5.png" alt="client" />
                                                        <div className="media-body">
                                                            <h6>Madeniko Mojika</h6>
                                                            <p className="designation">Branding Idendity</p>
                                                            <span>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <p>Our support team will get assistance from AI-powered suggestions, making it quicker than ever to handle support requests.</p>
                                                </li>
                                                <li className="current_item">
                                                    <div className="media">
                                                        <img className="media-left" src="assets/img/client/6.png" alt="client" />
                                                        <div className="media-body">
                                                            <h6>Madeniko Mojika</h6>
                                                            <p className="designation">CTO of Uxa</p>
                                                            <span>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <p>Our support team will get assistance from AI-powered suggestions, making it quicker than ever to handle support requests.</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="sbs-arrowleft"><NavLink id="btn_next" to="#"><i className="fa fa-long-arrow-left"></i></NavLink></div>
                                    <div className="sbs-arrowright"><NavLink id="btn_prev" to="#"><i className="fa fa-long-arrow-right"></i></NavLink></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="newsletter-area mg-top-110">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-7 col-lg-10 text-center">
                                <div className="section-title">
                                    <h2 className="title">Get our latest <span>Newslatter</span></h2>
                                    <p>Offer your business with the best assistance for growth.</p>
                                </div>
                                <div className="newsletter-subcribe">
                                    <form id="news-subcribeform" className="subcribe-form">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Your E-mail..." name="mail" required />
                                            <button type="submit" className="btn-green subcribe-submit">submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Content;