import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import React from "react";
import App from "./App";
import ArtistProfile from "./components/ArtistProfile";
import Booking from "./components/Booking";

const  RoutedApp =()=> {
    return(
        <Router>
            <div>
                <Switch>
                    <Route  path="/"                component={App}/>
                    <Route   path="/home"           component={App}/>
                    <Route  path="/artist/:mbid"    component={ArtistProfile} />
                    <Route  path="/booking"         component={Booking} />
                </Switch>
            </div>
        </Router>
        )
}

export default  RoutedApp
