import React, {Component} from "react";
import
{
    Route,
    Routes,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home/Home";
import Nurture from "./Nurture";
import Assignment from "./Assignment";

class Main extends Component
{
    render()
    {
        return (
            <HashRouter>
            <div>
                <h1>CIS453</h1>
                <ul className = "header">
                    <li><NavLink to = "/">Home</NavLink></li>
                    <li><NavLink to = "/nurture">Nurture Tracklist</NavLink></li>
                    <li><NavLink to = "assignment">Assignment Info</NavLink></li>
                </ul>
                <div className = "content">
                    <Routes>
                        <Route path = "/" element = {<Home />}/>
                        <Route path = "/nurture" element = {<Nurture />}/>
                        <Route path = "/assignment" element = {<Assignment />}/>
                    </Routes>
                </div>
            </div>
            </HashRouter>
        );
    }
}

export default Main;