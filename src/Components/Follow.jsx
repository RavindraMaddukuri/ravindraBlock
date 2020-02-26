import React, { Component } from "react";
class Follow extends Component {
  render() {
    return (
      <div className="container">
        <div className="button-container">
          <a
            className=" cc-facebook btn btn-default btn-round btn-lg btn-icon btn-default:hover"
            href="https://www.facebook.com/profile.php?id=100004489489097"
            rel="tooltip"
            target="_blank"
            rel="tooltip"
            title="Follow me on Facebook"
          >
            <i className="fa fa-facebook"></i>
          </a>
          <a
            className="btn btn-default btn-round btn-lg btn-icon  btn-default1:hover"
            href="https://twitter.com/RavindraMadduk2?s=09"
            rel="tooltip"
            target="_blank"
            title="Follow me on Twitter"
          >
            <i className="fa fa-twitter"></i>
          </a>
          <a
            className="btn btn-default btn-round btn-lg btn-icon btn-default2:hover"
            href="https://github.com/RavindraMaddukuri"
            rel="tooltip"
            target="_blank"
            title="Follow me on Github"
          >
            <i className="fa fa-github"></i>
          </a>
          <a
            className="btn btn-default btn-round btn-lg btn-icon"
            href="https://www.instagram.com/maddukuriravindra/"
            rel="tooltip"
            target="_blank"
            title="Follow me on Instagram"
          >
            <i className="fa fa-instagram"></i>
          </a>
        </div>
      </div>
    );
  }
}
export default Follow;
