import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/profile.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faKiwiBird } from "@fortawesome/free-solid-svg-icons";


export const Profile = () => {
  const { store, actions } = useContext(Context);
  return (

    <div className="container">
      <div className="row">
        <div className="col-xs-1 col-sm-6 col-md-6">
          <div className="well well-sm">
            <div className="row">
              <div className="col-sm-6 col-md-4">
                <img
                  src="https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg"
                  alt=""
                  className="img-rounded img-responsive"
                />
              </div>
              <div className="col-sm-6 col-md-8">
                <h4>Elena Forniés</h4>
                <small>
                  <cite title="San Francisco, USA">
                    San Francisco, USA{" "}
                    <i className="glyphicon glyphicon-map-marker"></i>
                  </cite>
                </small>
                <p>
                  <i className="glyphicon glyphicon-envelope"></i>
                  email@example.com
                  <br />
                  <i className="glyphicon glyphicon-globe"></i>
                  <a href="http://www.jquery2dotnet.com">
                    www.jquery2dotnet.com
                  </a>
                  <br />
                  <i className="glyphicon glyphicon-gift"></i>June 02, 1988
                </p>

                <div className="btn-group">
                  <button type="button" className="btn btn-primary">
                    Social
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <span className="caret"></span>
                    <span className="sr-only">Social</span>
                  </button>
                  <ul className="dropdown-menu" role="menu">
                    <li>
                      <a href="#">Twitter</a>
                    </li>
                    <li>
                      <a href="https://plus.google.com/+Jquery2dotnet/posts">
                        Google +
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/jquery2dotnet">
                        Facebook
                      </a>
                    </li>
                    <li className="divider"></li>
                    <li>
                      <a href="#">Github</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div> 
      <div className="btn-group" role="group" aria-label="Basic example">
  <button type="button" className="btn btn-secondary">My Art</button>
  <button type="button" className="btn btn-secondary">My favs</button>
  <button type="button" className="btn btn-secondary">Following</button>
</div>
      </div>
    </div>
    
  );
};
