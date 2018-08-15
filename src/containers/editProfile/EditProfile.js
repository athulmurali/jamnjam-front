import React from "react";
import RegistrationForm from "../userRegistration/RegistrationForm";

const EditProfile =(props)=>{





    return <div className="container-fluid">
        <div className="row">
            <div className="container-fluid text-center">
                <h2>Edit  Profile : {props.match.params.userRole}</h2>
                </div>


        </div>

        <RegistrationForm updateMode = {true}>

        </RegistrationForm>

    </div>
    }
export default EditProfile
