import React from "react";
export default class ArtistLookOuts extends React.Component{

    lookOuts = [{
        _id: 1234,
        firstName : "member1"
    },
        { _id: 1234,
            firstName : "member2"
        },

        {_id: 1234,
            firstName : "member3"
        },]


    getBand=()=>{

    }

    componentDidMount(){


    }
    render(){
        return<div>
            <div className="container-fluid ">
                <div className="row">
                    <h1>Manage Network</h1>

                </div>

                <div className="row">
                    <h4>Current Band Members</h4>


                    <div className="container-fluid card-deck">


                        {this.lookOuts.map(lookOut=>{
                             return <div className="jumbotron">
                                <h1>Bootstrap Tutorial</h1>
                                <p>Bootstrap is the most popular HTML, CSS...</p>
                            </div>


                        })}


                    </div>


                </div>

            </div>
        </div>

    }
}
