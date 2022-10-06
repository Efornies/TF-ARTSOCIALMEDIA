import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import { Home } from "./pages/home";
import { Register} from "./pages/register";
import { Profile} from "./pages/profile";
import { Myfavs} from "./pages/myfavs";
import { Myfoll} from "./pages/myfoll";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";


//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    return (
        <div className="h-100">
            <BrowserRouter basename={basename}>
             
                    
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Register />} path="/register" />
                        <Route element={<Profile />} path="/profile" />
                        <Route element={<Myfavs />} path="/myfavs" />
                        <Route element={<Myfoll />} path="/myfoll" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                   
                
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
