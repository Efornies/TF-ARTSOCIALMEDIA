import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="Fondo">
		<div className="Cuadro">

		
		<div className="text-center mt-5">
			<h1>Artcop</h1>
		</div>
		</div>
		</div>
	);
};
