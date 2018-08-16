import React from "react";
import {UserService} from "../services/api/user";
export default class MyLookOuts extends React.Component{

    constructor(props)
    {
        super(props);

        this.state= {
            completed : false
        };
        this.userService = new UserService();

    }




    getLookOuts = ()=>{


        this.userService.getArtistLookOuts().then(
            res=>{

                const result = res.data;
                console.log("unfiltered");
                console.log(result);
                console.log("filtered");

                const myResults = result.filter((lookOut)=>{
                    return lookOut.postedBy == this.props.match.params.bandId

                });

                console.log(myResults);
                this.setState({
                    lookOuts : myResults

                })
            }
        )

    };

    deleteLookOut=(lookOutId)=>{
        this.userService.deleteLookOut(lookOutId).then(
            res=> {
                console.log(res.data);

                alert("success");

                this.setState({
                    completed: true
                })
            }).catch(err=>{
                alert("error!");
                    console.log(err);
                })

            };



    componentDidMount(){
        this.getLookOuts();
    }
    render(){

        if(!!this.state.completed)
        {
            this.getLookOuts();
            this.setState({
                completed : false
            })

        }



        return<div>
            <div className="container-fluid ">
                <div className="row">
                    <h1>My  Lookouts</h1>

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

                                        <div className="row col">
                                            <button className="btn-outline-danger btn-lg"
                                                    style={{cursor :'pointer'}}
                                                    onClick={()=>{
                                                        this.deleteLookOut(lookOut._id)
                                                    }}
                                            >Delete</button>
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
