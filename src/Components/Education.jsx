import React, { Component } from "react";
class Education extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="section">
          <div className="container cc-education">
            <div className="h4 text-center mb-4 title">Education</div>
            <div className="card">
              <div className="row">
                <div
                  className="col-md-3 bg-primary"
                  data-aos="fade-right"
                  data-aos-offset="50"
                  data-aos-duration="500"
                >
                  <div className="card-body cc-education-header">
                    <p>2014-2018</p>
                    <div className="h5">Bachelor of Technology</div>
                  </div>
                </div>
                <div
                  className="col-md-9"
                  data-aos="fade-left"
                  data-aos-offset="50"
                  data-aos-duration="500"
                >
                  <div className="card-body">
                    <div className="h5">
                    Electronics and Electrical Engineering
                    </div>
                    <p className="category">
                    Sasi Institute of Technology and Engineering.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="row">
                <div
                  className="col-md-3 bg-primary"
                  data-aos="fade-right"
                  data-aos-offset="50"
                  data-aos-duration="500"
                >
                  <div className="card-body cc-education-header">
                    <p>2012 - 2014</p>
                    <div className="h5">Intermediate</div>
                  </div>
                </div>
                <div
                  className="col-md-9"
                  data-aos="fade-left"
                  data-aos-offset="50"
                  data-aos-duration="500"
                >
                  <div className="card-body">
                    <div className="h5">Intermediate M.P.C</div>
                    <p className="category">Aditya junior college, Tadepalligudem.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="row">
                <div
                  className="col-md-3 bg-primary"
                  data-aos="fade-right"
                  data-aos-offset="50"
                  data-aos-duration="500"
                >
                  <div className="card-body cc-education-header">
                    <p>2012 - 2013</p>
                    <div className="h5">High School</div>
                  </div>
                </div>
                <div
                  className="col-md-9"
                  data-aos="fade-left"
                  data-aos-offset="50"
                  data-aos-duration="500"
                >
                  <div className="card-body">
                    <div className="h5">School of Secondary Board</div>
                    <p className="category">Narayana English medium school.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Education;
