import {Redirect} from "react-router-dom";
import {ADMIN, ARTIST, BAND} from "../../const/userRoles";
import React from "react";
import {connect} from "react-redux";

const profileByRole=(props)=>{

    const myProfile = JSON.parse(localStorage.getItem('myProfile'));
    const myRole =  myProfile.role;


    return  <Redirect to={ myProfile.role +'/'+ myProfile._id}/>;

    switch (myRole)
    {
        // case ADMIN      :  return <Redirect to={'/AdminProfile/' + props.profile._id}/>
        // case ARTIST     : return <Redirect to={'/ArtistProfile/' + props.profile._id}/>
        // case BAND       : return <Redirect to={'/BandProfile/' + props.profile._id}/>

        case ADMIN      :   return <Redirect to={'admin/'}/>;
        case ARTIST     :   return <Redirect to={'artist/'+ myProfile._id}/>;
        case BAND       :   return <Redirect to={'band/'+ myProfile._id}/>;

        default :  return<h2>Invalid role obtained from backend</h2>
    }

};


const mapStateToProps = state => {
    return {...state.loginReducer}
};



export default  connect(mapStateToProps)(profileByRole);
