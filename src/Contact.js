import React from "react";
import Bck from './page-title-bg.png';
import { NavLink } from "react-router-dom";

class Contact extends React.Component {
  render() {
    return (
      <div>
        {/*	breadcrumb area start	*/}
        <div className="breadcrumb-area" style={{backgroundImage:'url('+Bck+')'}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-inner">
                  <h1 className="page-title">Contact Us</h1>
                  <ul className="page-list">
                    <li><NavLink to="index.html">Home</NavLink></li>
                    <li>Contact</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*	breadcrumb area End	*/}

        {/*	contact form start	*/}
        <div className="contact-form-area pd-top-112">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-8">
                <div className="section-title text-center w-100">
                  <h2 className="title">Send you <span>inquary</span></h2>
                  <p>Why I say old chap that is, spiffing jolly good a load of old tosh spend a penny tosser arse over tit, excuse my French owt to do with me up the kyver matie boy.</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-4 col-lg-5">
                <img src="assets/img/others/21.png" alt="blog" />
              </div>
              <div className="col-lg-7 offset-xl-1">
                <form className="riyaqas-form-wrap mt-5 mt-lg-0">
                  <div className="row custom-gutters-16">
                    <div className="col-md-6">
                      <div className="single-input-wrap">
                        <input type="text" className="single-input" />
                        <label>Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-input-wrap">
                        <input type="text" className="single-input" />
                        <label>E-mail</label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="single-input-wrap">
                        <input type="text" className="single-input" />
                        <label>Subject</label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="single-input-wrap">
                        <textarea className="single-input textarea" cols="20"></textarea>
                        <label className="single-input-label">Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <NavLink className="btn btn-red mt-0" to="#">Send</NavLink>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/*	contact form end	*/}

        {/*	map area start	*/}
        <div className="map-area pd-top-120">
          <div className="container">
            <div className="map-area-wrap">
              <div className="row no-gutters">
                <div className="col-lg-8">
                  <div> 
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29624007.58460168!2d115.22979863156776!3d-24.992915938390176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b2bfd076787c5df%3A0x538267a1955b1352!2sAustralia!5e0!3m2!1sen!2sin!4v1580538834164!5m2!1sen!2sin" title="WorldMap" style={{width:"100%",height:"600px",frameborder:"0",border:"0"}} allowFullScreen=""></iframe></div>
                </div>
                <div className="col-lg-4 desktop-center-item">
                  <div>
                    <div className="contact-info">
                      <h4 className="title">Contact info:</h4>
                      <p className="sub-title">Why I say old chap that is, spiffing jolly good a load of old tosh spend a penny tosser arse over tosh</p>
                      <p>Address: 198 East 29th Street, Suite 721 <br /> Australia</p>
                      <p><span>Mobile:</span> +011 012121212</p>
                      <p><span>E-mail:</span> info.digitaldash@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*	map area End	*/}
      </div>
    );
  }
}

export default Contact;