import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import React from "react";
import App from "./Home";
import ArtistProfile from "./containers/profiles/ArtistProfile";
import Booking from "./components/Booking";
import NavBarContainer from "./components/NavBarContainer";
import Admin from "./containers/Admin";
import UserRegister from "./containers/userRegistration/UserRegister";
import roleSelect from "./containers/userRegistration/RoleSelect";
import BandProfile from "./containers/profiles/BandProfile";
import UserLoginContainer from "./containers/userLogin/UserLoginContainer";
import history from './components/history'
import profileByRole from "./containers/profiles/profileByRole";
import EditProfile from "./containers/editProfile/EditProfile";
import ManageNetwork from "./containers/ManageNetwork";
import ArtistLookOuts from "./containers/ArtistLookOuts";
import AddLookOut from "./containers/AddLookOut";
import MyLookOuts from "./containers/MyLookOuts";
import CelebrityProfile from "./containers/profiles/CelebrityProfile";
import MyBookings from "./containers/bookings/MyBookings";
import {PATH_BOOK_ARTIST, PATH_MY_GIGS} from "./const/routeConstants";
import CreateBooking from "./containers/bookings/CreateBooking";
const  RoutedApp =()=> {
    return(
        <div>
            <Router>

                <div>
                    <NavBarContainer history={history}/>

                    <Switch>
                        <Route  exact path={PATH_BOOK_ARTIST}         component={CreateBooking} />
                        <Route  exact path={PATH_MY_GIGS}         component={MyBookings} />
                        <Route exact path="/"                   component={App}/>
                        <Route  exact  path="/home"             component={App}/>
                        <Route  exact path="/artist/:artistId"      component={ArtistProfile} />
                        <Route exact path={"/artist/:artistId/artistLookOuts/"}
                               component ={ArtistLookOuts}/>
                        <Route  exact path="/band/:userId"      component={BandProfile} />
                        <Route  exact path="/celebrity/:userId"      component={CelebrityProfile} />
                        <Route  exact path="/band/:bandId/manageNetwork/"
                                component={ManageNetwork } />
                        <Route  exact path="/band/:bandId/addLookOut/"
                                component={AddLookOut } />
                        <Route  exact path="/band/:bandId/myLookOuts/"
                                component={MyLookOuts } />
                        <Route  exact path="/booking"           component={Booking} />
                        <Route  path="/admin"             component={Admin } />
                        <Route  exact path="/register"          component={UserRegister } />
                        <Route  exact path="/login"          component={UserLoginContainer } />
                        <Route  exact path="/roleSelect"         component={roleSelect } />
                        <Route  exact path="/profileByRole"          component={profileByRole } />
                        <Route  exact path="/:userRole/editProfile/:_id" component={EditProfile } />
                    </Switch>
                </div>
            </Router>
        </div>



        )
};

export default  RoutedApp
