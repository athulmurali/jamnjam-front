import React from "react";
import {UserService} from "../services/api/user";
export default class LookOutsFromMyBands extends React.Component{

    constructor(props)
    {
        super(props);

        this.state= {}
    }



    getLookOuts = ()=>{

        const userService = new UserService();
        const myProfile = JSON.parse(localStorage.getItem('myProfile'))
        const myBands = myProfile.memberOf

        userService.getArtistLookOuts().then(
            res=>{

                const allPosts = res.data;
                const filteredPosts = allPosts.filter((post,index)=>{

                    return myBands.indexOf(post.postedBy) > -1
                })

                this.setState({
                    lookOuts : filteredPosts
                })
            }
        )

    };

    componentDidMount(){
        this.getLookOuts();
    }
    render(){
        return<div>
            <div className="container-fluid ">
                <div className="row">
                    <h1>Artist  Lookouts from My Bands</h1>

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
