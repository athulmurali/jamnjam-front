import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import React from "react";
import App from "./App";
import ArtistProfile from "./components/ArtistProfile";
import Booking from "./components/Booking";
import NavBarContainer from "./components/NavBarContainer";
import Admin from "./containers/Admin";

const  RoutedApp =()=> {
    return(
        <div>
            <NavBarContainer/>
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/"                component={App}/>
                        <Route  exact  path="/home"           component={App}/>
                        <Route  exact path="/artist/:mbid"    component={ArtistProfile} />
                        <Route  exact path="/booking"         component={Booking} />
                        <Route  exact path="/admin"           component={Admin } />
                    </Switch>

                </div>
            </Router>
        </div>



        )
}

export default  RoutedApp
