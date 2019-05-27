import React from "react";
import {UserService} from "../services/api/user";

class AddLookOut extends  React.Component{


    constructor(props)
    {
        super(props);
        this.state={
            completed :false,

            postedBy : '',
            title : '',
            description : '',
        };

        this.userService = new UserService();
    }

    createLookOut=()=>{
        const payload = {
            postedBy: this.state.postedBy,
            title : this.state.title,
            description : this.state.description
        };
        this.userService.createArtistLookOuts(payload)
            .then(res => {
                this.setState({completed: true})
            })
            .catch(err => {
                console.log(err);
            })
    };

    componentDidMount(){
        this.setState(
            {postedBy: this.props.match.params.bandId}
        )
    }

    render()
    {
            this.state.completed && this.props.history.push('/home');



        return<div className="container-fluid ">



        <div className="row text-center">
            <div className="col-12 text-center">

                <h4>Add Artist LookOut</h4>
            </div>

            <div className="container-fluid text-center">
                <div>
                </div>

                <div className="row  text-center">
                    <div className="col-10 mx-auto">

                        <div>
                            <div className="form-group">
                                <label for="exampleFormControlInput1">Title</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1"
                                       placeholder="title"
                                onChange={(e)=>{
                                    this.setState({title : e.target.value})
                                }}/>
                            </div>

                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Description</label>
                            <textarea
                                onChange={(e)=>{
                                    this.setState({
                                        description : e.target.value
                                    })

                                }}
                                className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                            <div className="container-fluid row">
                                <div className="col-6 btn-group">

                                    <button className="btn btn-secondary btn-block ">
                                        Cancel
                                    </button>

                                </div>

                                <div className="col-6">


                                    <button className="btn btn-success btn-block "
                                    disabled={!(this.state.title
                                        && this.state.postedBy
                                        && this.state.description)}

                                    onClick={()=>{
                                        this.createLookOut();
                                    }}

                                    >
                                        Post
                                    </button>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>


        </div>
    </div>

    }

}



 export default  AddLookOut
