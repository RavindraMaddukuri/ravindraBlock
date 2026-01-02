import React, { Component } from "react";
import Profile from "./Profile";
import Follow from "./Follow";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import Contact from "./Contact";
import Projects from "./Projects";
// import Follow from "./Follow";

class Content extends Component {
  render() {
    return (
      <div className="page-content">
        <div>
          <div className="profile-page">
            <div className="wrapper">
              <div
                className="page-header page-header-small"
                filter-color="green"
                style={{ background: "none" }}
              >
                <div
                  className="page-header-image"
                  data-parallax="true"
                  style={{ backgroundImage: "url('images/cc-bg-1.jpg')" }}
                ></div>
                <Profile />
                <div className="section" id="follow">
                  <Follow />
                </div>
              </div>
            </div>
            <div className="section" id="about">
              <About />
            </div>
            <div className="section" id="skill">
              <Skills />
            </div>

            <div className="section" id="experience">
              <Experience />
            </div>

             <div className="section" id="experience">
              <Projects />
            </div>

            <div className="section">
              <Education />
            </div>
            <div className="section" id="contact">
              <Contact />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Content;
