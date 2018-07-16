import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import React from "react";
import App from "./App";
import ArtistProfile from "./components/ArtistProfile";
import Booking from "./components/Booking";

const  RoutedApp =()=> {

    return<Router>

    <Switch>
        <div>
            <Route exact path="/" component={App}/>
            <Route  exact path="/home" component={App}/>
            <Route   exact path="/artist" component={ArtistProfile} />

            <Route   exact path="/booking" component={Booking} />


        </div>
    </Switch>
    </Router>

}

export default  RoutedApp
