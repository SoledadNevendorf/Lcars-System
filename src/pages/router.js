import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//PAGES
import Home from './Home';
import Error from './Error';
import SingleShip from '../miniApps/ShipsApp/singleShip';

const ReactRouterSetup = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="*" element={<Error/>} />
                <Route path="/ship-list-app/:id" element={<SingleShip/>}/>
            </Routes>
        </Router>
    );
}

export default ReactRouterSetup;