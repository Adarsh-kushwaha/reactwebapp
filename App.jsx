import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import{Switch, Route, Redirect} from "react-router-dom";

// Doing URL Routing
const App =() => {
    return (
        <> <Navbar/>
            <Switch>
                <Route exact path="/" component = {Home}/>
                <Route exact path="/about" component = {About}/>
                <Route exact path="/contact" component = {Contact}/>
                <Route exact path="/Service" component = {Service}/>
                <Redirect to = "/"/>
            </Switch>
        </>
    );
};

export default App;