import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import React from "react";
import App from "./App";
import ArtistProfile from "./containers/profiles/ArtistProfile";
import Booking from "./components/Booking";
import NavBarContainer from "./components/NavBarContainer";
import Admin from "./containers/Admin";
import UserRegister from "./containers/userRegistration/UserRegister";
import roleSelect from "./containers/userRegistration/RoleSelect";
import BandProfile from "./containers/profiles/BandProfile";
import UserLoginContainer from "./containers/userLogin/UserLoginContainer";
import history from './components/history'
const  RoutedApp =()=> {
    return(
        <div>
            <Router>

                <div>
                    <NavBarContainer history={history}/>

                    <Switch>
                        <Route exact path="/"                   component={App}/>
                        <Route  exact  path="/home"             component={App}/>
                        <Route  exact path="/artist/:mbid"      component={ArtistProfile} />
                        <Route  exact path="/band/:mbid"      component={BandProfile} />

                        <Route  exact path="/booking"           component={Booking} />
                        <Route  exact path="/admin"             component={Admin } />
                        <Route  exact path="/register"          component={UserRegister } />
                        <Route  exact path="/login"          component={UserLoginContainer } />

                        <Route  exact path="/roleSelect"          component={roleSelect } />


                    </Switch>

                </div>
            </Router>
        </div>



        )
}

export default  RoutedApp
