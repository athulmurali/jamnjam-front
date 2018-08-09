import React from "react";
export   const  VerifyEmail = ()=>{
    return(
        <div className="card rounded" id="successCard">
            <div className="card-img-top row">

                <i className="mx-auto fas fa-check-circle fa-6x" style={{padding: '10'}}></i>
            </div>

            <div className="card-body ">
                <h5 className="card-title">Registration Successful! </h5>
                <p className="card-text">
                    An activation mail has been sent to your registered email.
                    It should be there within 5 minutes. Please check your inbox. </p>
                <a href="#" className="btn btn-primary">Login</a>
            </div>
        </div>

    )
}
