import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="back"> 
		<div className="art"> 
		<div className="welcomebox">
			

		
		<div className="text-center mt-5">
			<h1>Artcop</h1>
			<p> Entra en el mundo colaborativo de ARTCOP</p>
		</div>
		</div>
		</div>
		</div> 
	);
};
