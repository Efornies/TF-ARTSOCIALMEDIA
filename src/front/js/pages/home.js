import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";



export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="parent h-100">
      <div className="back "> </div>
      <div className="art">
        <div className="welcomebox">
          <div className="loginform">
            <div className="titulo text-center mt-5">
				<div>
					Artcop 
				 </div>
              <div>
                <p> Entra en el mundo colaborativo de ARCOP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
