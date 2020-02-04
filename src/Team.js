import React from "react";
import Bck from './page-title-bg.png';
import {NavLink} from "react-router-dom";

class Team extends React.Component {
  render() {
    return (
      <div>
        <div className="breadcrumb-area" style={{backgroundImage:'url('+Bck+')'}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-inner">
                  <h1 className="page-title">Team</h1>
                  <ul className="page-list">
                    <li><NavLink to="index.html">Home</NavLink></li>
                    <li>Team</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* breadcrumb area End */}

        {/* team area Start */}
        <div className="team-area-wrpper pd-top-112">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-10">
                <div className="section-title text-center">
                  <h2 className="title">Southwest Digital Dash Creative <span>Team</span></h2>
                  <p>Southwest Digital Dash One of the best Software Development company. Southwest Digital Dash is at the forefront as the most innovative web development company. Our cost efficient and structured teamwork.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="team-area text-center">
            <div className="container">
              <div className="row custom-gutters-20">
                <div className="col-lg-3 col-sm-6">
                  <div className="single-team">
                    <div className="thumb">
                      <img src="assets/img/startup/team/1.jpg" alt="team" />
                    </div>
                    <h6><NavLink to="#">Abedin Abed</NavLink></h6>
                    <span>Creative Director</span>
                    <p>Southwest Digital Dash One of the best Software Development company.</p>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="single-team">
                    <div className="thumb">
                      <img src="assets/img/startup/team/2.jpg" alt="team" />
                    </div>
                    <h6><NavLink to="#">Jabedin jabed</NavLink></h6>
                    <span>Projector Manager</span>
                    <p>Southwest Digital Dash One of the best Software Development company.</p>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="single-team">
                    <div className="thumb">
                      <img src="assets/img/startup/team/6.png" alt="team" />
                    </div>
                    <h6><NavLink to="#">Moin Khan</NavLink></h6>
                    <span>Art Director</span>
                    <p>Southwest Digital Dash One of the best Software Development company.</p>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="single-team">
                    <div className="thumb">
                      <img src="assets/img/startup/team/5.png" alt="team" />
                    </div>
                    <h6><NavLink to="#">Raysa Rabi</NavLink></h6>
                    <span>Marketing Exe.</span>
                    <p>Southwest Digital Dash One of the best Software Development company.</p>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="single-team">
                    <div className="thumb">
                      <img src="assets/img/startup/team/7.png" alt="team" />
                    </div>
                    <h6><NavLink to="#">Djairo van</NavLink></h6>
                    <span>Lead Developer</span>
                    <p>Southwest Digital Dash One of the best Software Development company.</p>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="single-team">
                    <div className="thumb">
                      <img src="assets/img/startup/team/8.png" alt="team" />
                    </div>
                    <h6><NavLink to="#">Terry Martin</NavLink></h6>
                    <span>Designer</span>
                    <p>Southwest Digital Dash One of the best Software Development company.</p>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="single-team">
                    <div className="thumb">
                      <img src="assets/img/startup/team/9.png" alt="team" />
                    </div>
                    <h6><NavLink to="#">Xav Cotton</NavLink></h6>
                    <span>Marketing manager</span>
                    <p>Southwest Digital Dash One of the best Software Development company.</p>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="single-team">
                    <div className="thumb">
                      <img src="assets/img/startup/team/3.jpg" alt="team" />
                    </div>
                    <h6><NavLink to="#">Jamie burn</NavLink></h6>
                    <span>Marketing Exe.</span>
                    <p>Southwest Digital Dash One of the best Software Development company.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* team area End  */}

        {/* client area start */}
        <div className="client-area pd-top-112">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-9">
                <div className="section-title style-two text-center">
                  <h2 className="title">What Our <span>Client Say?</span></h2>
                  <p>Our support team will get assistance from AI-powered suggestions, making it quicker than ever to support requests. Our support team will get from AI-powered suggestions.</p>
                </div>
              </div>
            </div>
            <div className="client-slider">
              <div className="client-slider-item">
                <div className="media">
                  <img src="assets/img/client/1.png" alt="client" />
                  <div className="media-body">
                    <h6>Madeniko Mojika</h6>
                    <p>CTO of Uxa</p>
                  </div>
                </div>
                <p className="client-content">Our support team will get assistance from AI-powered suggestions, making it quicker than ever to handle support requests.</p>
              </div>
              <div className="client-slider-item">
                <div className="media">
                  <img src="assets/img/client/2.png" alt="client" />
                  <div className="media-body">
                    <h6>Sam Harington</h6>
                    <p>CEO at craft</p>
                  </div>
                </div>
                <p className="client-content">Our support team will get assistance from AI-powered suggestions, making it quicker than ever to handle support requests.</p>
              </div>
              <div className="client-slider-item">
                <div className="media">
                  <img src="assets/img/client/3.png" alt="client" />
                  <div className="media-body">
                    <h6>Filippus Stigter</h6>
                    <p>Founder at todo</p>
                  </div>
                </div>
                <p className="client-content">Our support team will get assistance from AI-powered suggestions, making it quicker than ever to handle support requests.</p>
              </div>
            </div>
          </div>
        </div>
        {/* client area End */}

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

export default Team;