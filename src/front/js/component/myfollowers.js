

import React, { Component } from "react";

export const myfollowers = () => (
  <div>
  <ul className="nav nav-tabs" >
  <li className="nav-item">
    <a className="nav-link " href="../component/myart">
      My Art
    </a>
  </li>
  <li className="nav-item">
    <a class="nav-link " style = {{color: "burlywood"}} href="#">
      My Favs
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link active" style = {{color: "burlywood"}}  href="#">
      My Kiwis
    </a>
  </li>
</ul>
</div>
);