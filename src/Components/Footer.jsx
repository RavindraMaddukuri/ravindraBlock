import React, { Component } from "react";
class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container text-center">
        
        <a
            className="cc-linkedin btn btn-link"
            href="https://www.linkedin.com/in/ravindra-maddukuri-439390184/"
          >
            <i className="fa fa-linkedin fa-2x " aria-hidden="true"></i>
          </a>
          <a
            className="cc-facebook btn btn-link"
            href="https://www.facebook.com/profile.php?id=100004489489097"
          >
            <i className="fa fa-facebook fa-2x " aria-hidden="true"></i>
          </a>
          <a
            className="cc-twitter btn btn-link "
            href="https://twitter.com/RavindraMadduk2?s=09"
          >
            <i className="fa fa-twitter fa-2x " aria-hidden="true"></i>
          </a>
          <a
            className="cc-google-plus btn btn-link"
            href="https://github.com/RavindraMaddukuri"
          >
            <i className="fa fa-github fa-2x" aria-hidden="true"></i>
          </a>
          <a
            className="cc-instagram btn btn-link"
            href="https://www.instagram.com/maddukuriravindra/"
          >
            <i className="fa fa-instagram  fa-2x" aria-hidden="true"></i>
          </a>
        </div>
        <div className="h4 title text-center">Ravindra Maddukuri</div>
        <div className="text-center text-muted"></div>
      </footer>
    );
  }
}
export default Footer;
