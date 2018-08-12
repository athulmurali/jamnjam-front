import {Redirect} from "react-router-dom";
import {ADMIN, ARTIST, BAND} from "../../const/userRoles";
import React from "react";
import {connect} from "react-redux";

const profileByRole=(props)=>{

    switch (props.profile.role)
    {
        // case ADMIN      :  return <Redirect to={'/AdminProfile/' + props.profile._id}/>
        // case ARTIST     : return <Redirect to={'/ArtistProfile/' + props.profile._id}/>
        // case BAND       : return <Redirect to={'/BandProfile/' + props.profile._id}/>

        case ADMIN      :   return <Redirect to={'admin/'}/>
        case ARTIST     :   return <Redirect to={'artist/cc197bad-dc9c-440d-a5b5-d52ba2e14234/'}/>
        case BAND       :   return <Redirect to={'band/cc197bad-dc9c-440d-a5b5-d52ba2e14234/'}/>




        default :  return<h2>Invalid role obtained from backend</h2>
    }

}


const mapDispatchToProps=(dispatch)=>{
    return null;
}

const mapStateToProps = state => {
    return {...state.loginReducer}
}



export default  connect(mapStateToProps, mapDispatchToProps)(profileByRole);
