import React from "react";
import {UserService} from "../services/api/user";
export default class ArtistLookOuts extends React.Component{

    constructor(props)
    {
        super(props)

        this.state= {}
    }



    getLookOuts = ()=>{

        const userService = new UserService();

        userService.getArtistLookOuts().then(
            res=>{
                this.setState({
                    lookOuts : res.data
                })
            }
        )

    }

    componentDidMount(){
        this.getLookOuts();
    }
    render(){
        return<div>
            <div className="container-fluid ">
                <div className="row">
                    <h1>Artist  Lookout</h1>

                </div>

                <div className="row">

                    <div className="container-fluid mx-auto ">

                        {this.state.lookOuts && this.state.lookOuts.map((lookOut,index)=> {
                            return<div  key = {index}
                                className="container-fluid col-sm-10 col-md-12 col-lg-12">

                            <div className="jumbotron row">
                                <div className="container-fluid">
                                <h3>{lookOut.title}</h3>
                                    <div className="container-fluid">
                                        <p>{lookOut.description}</p>
                                    </div>

                                    <div className="container-fluid">
                                        <p>{lookOut.createdAt}</p>
                                    </div>
                                </div>
                            </div>
                        </div>



                        })}


                    </div>


                </div>

            </div>
        </div>

    }
}
