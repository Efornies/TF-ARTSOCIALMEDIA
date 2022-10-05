import React, { Component } from "react";

export const myart = () => (
  <div>
        <ul className="nav nav-tabs" >
          <li className="nav-item">
            <a className="nav-link active" href="../component/myart">
              My Art
            </a>
          </li>
          <li className="nav-item">
            <a class="nav-link" style = {{color: "burlywood"}} href="#">
              My Favs
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" style = {{color: "burlywood"}}  href="#">
              My Kiwis
            </a>
          </li>
        </ul>
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100"
            src="http://prod-upp-image-read.ft.com/e9a0d7ee-a1be-11e8-85da-eeb7a9ce36e4"
            alt="First slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/ab723877268563.5c829061bd6ea.jpg"
            alt="Second slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/originals/9b/a5/a2/9ba5a220b73eb7cf1eabcbedf3101fe9.jpg"
            alt="Third slide"
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  </div>
);
