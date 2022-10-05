import React, { Component } from "react";

export const myfavs = () => (
  <div>
    <ul className="nav nav-tabs" >
    <li className="nav-item">
      <a className="nav-link " href="../component/myart">
        My Art
      </a>
    </li>
    <li className="nav-item">
      <a class="nav-link active" style = {{color: "burlywood"}} href="#">
        My Favs
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" style = {{color: "burlywood"}}  href="#">
        My Kiwis
      </a>
    </li>
  </ul>
 </div>
 );