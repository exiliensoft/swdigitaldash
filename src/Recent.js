import React from "react";
import Bck from './page-title-bg.png';

class Recent extends React.Component {
  render() {
    return (
      <div>

        {/*  breadcrumb area start */}
        <div className="breadcrumb-area" style={{backgroundImage:'url('+Bck+')'}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-inner">
                  <h1 className="page-title">Recent Projects</h1>
                  <ul className="page-list">
                    <li><a href="index.html">Home</a></li>
                    <li>Recent Projects</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  breadcrumb area End  */}

        {/*  gallery area start  */}
        <div className="gallery-area pd-top-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="gallery-masonry-wrapper">
                  <ul className="gallery-menu text-center">
                    <li className="active" data-filter="*">See All</li>
                    <li data-filter=".android">Android</li>
                    <li data-filter=".iphone">iphone</li>
                    <li data-filter=".website">Website</li>
                    <li data-filter=".marketing">Marketing</li>
                  </ul>
                  <div className="gallery-masonry row no-gutters">
                    <div className="col-md-4 col-sm-6 masonry-item android website">
                      <a className="single-work-item text-center" data-effect="mfp-zoom-in" href="assets/img/gallery/1.png">
                        <span className="thumb">
                          <img src="assets/img/gallery/1.png" alt="gallery" />
                        </span>
                        <span className="content-wrap">
                          <span className="content">
                            <span className="cats">UI/UX Design</span>
                            <span className="title">Ui Problem solving</span>
                          </span>
                        </span>
                      </a>
                    </div>
                    <div className="col-md-4 col-sm-6 masonry-item iphone website">
                      <a className="single-work-item text-center" data-effect="mfp-zoom-in" href="assets/img/gallery/2.png">
                        <span className="thumb">
                          <img src="assets/img/gallery/2.png" alt="gallery" />
                        </span>
                        <span className="content-wrap">
                          <span className="content">
                            <span className="cats">UI/UX Design</span>
                            <span className="title">Ui Problem solving</span>
                          </span>
                        </span>
                      </a>
                    </div>
                    <div className="col-md-4 col-sm-6 masonry-item android marketing">
                      <a className="single-work-item text-center" data-effect="mfp-zoom-in" href="assets/img/gallery/3.png">
                        <span className="thumb">
                          <img src="assets/img/gallery/3.png" alt="gallery" />
                        </span>
                        <span className="content-wrap">
                          <span className="content">
                            <span className="cats">UI/UX Design</span>
                            <span className="title">Ui Problem solving</span>
                          </span>
                        </span>
                      </a>
                    </div>
                    <div className="col-md-4 col-sm-6 masonry-item iphone website">
                      <a className="single-work-item text-center" data-effect="mfp-zoom-in" href="assets/img/gallery/4.png">
                        <span className="thumb">
                          <img src="assets/img/gallery/4.png" alt="gallery" />
                        </span>
                        <span className="content-wrap">
                          <span className="content">
                            <span className="cats">UI/UX Design</span>
                            <span className="title">Ui Problem solving</span>
                          </span>
                        </span>
                      </a>
                    </div>
                    <div className="col-md-4 col-sm-6 masonry-item iphone marketing">
                      <a className="single-work-item text-center" data-effect="mfp-zoom-in" href="assets/img/gallery/5.png">
                        <span className="thumb">
                          <img src="assets/img/gallery/5.png" alt="gallery" />
                        </span>
                        <span className="content-wrap">
                          <span className="content">
                            <span className="cats">UI/UX Design</span>
                            <span className="title">Ui Problem solving</span>
                          </span>
                        </span>
                      </a>
                    </div>
                    <div className="col-md-4 col-sm-6 masonry-item android website">
                      <a className="single-work-item text-center" data-effect="mfp-zoom-in" href="assets/img/gallery/6.png">
                        <span className="thumb">
                          <img src="assets/img/gallery/6.png" alt="gallery" />
                        </span>
                        <span className="content-wrap">
                          <span className="content">
                            <span className="cats">UI/UX Design</span>
                            <span className="title">Ui Problem solving</span>
                          </span>
                        </span>
                      </a>
                    </div>
                    <div className="col-md-4 col-sm-6 masonry-item iphone marketing">
                      <a className="single-work-item text-center" data-effect="mfp-zoom-in" href="assets/img/gallery/7.png">
                        <span className="thumb">
                          <img src="assets/img/gallery/7.png" alt="gallery" />
                        </span>
                        <span className="content-wrap">
                          <span className="content">
                            <span className="cats">UI/UX Design</span>
                            <span className="title">Ui Problem solving</span>
                          </span>
                        </span>
                      </a>
                    </div>
                    <div className="col-md-4 col-sm-6 masonry-item iphone website">
                      <a className="single-work-item text-center" data-effect="mfp-zoom-in" href="assets/img/gallery/8.png">
                        <span className="thumb">
                          <img src="assets/img/gallery/8.png" alt="gallery" />
                        </span>
                        <span className="content-wrap">
                          <span className="content">
                            <span className="cats">UI/UX Design</span>
                            <span className="title">Ui Problem solving</span>
                          </span>
                        </span>
                      </a>
                    </div>
                    <div className="col-md-4 col-sm-6 masonry-item website marketing">
                      <a className="single-work-item text-center" data-effect="mfp-zoom-in" href="assets/img/gallery/9.png">
                        <span className="thumb">
                          <img src="assets/img/gallery/9.png" alt="gallery" />
                        </span>
                        <span className="content-wrap">
                          <span className="content">
                            <span className="cats">UI/UX Design</span>
                            <span className="title">Ui Problem solving</span>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  gallery area End */}

      </div>
    );
  }
}

export default Recent;