import React from "react";
import {UserService} from "../services/api/user";

export default class ManageNetwork extends React.Component{


    constructor(props)
    {
        super(props);

        this.userService = new UserService();

        this.state ={
            artists : [],
            error : ''
        }
    }

    setBandMembers =()=>{
        const bandMembers =  this.state.artists.filter(
            (artist, index)=>{
                console.log(artist.memberOf);
                console.log(this.props.match.params.bandId);
                console.log(artist.memberOf.indexOf(this.props.match.params.bandId) > -1);
                return artist.memberOf.indexOf(this.props.match.params.bandId) > -1 }
        );
        this.setState({bandMembers: bandMembers },
            this.setNonBandMembers)
    };

    setNonBandMembers =()=>{
        const nonBandMembers =  this.state.artists.filter(
            (artist, index)=>{return artist.memberOf.indexOf(this.props.match.params.bandId) === -1 }
        );
        this.setState({nonBandMembers: nonBandMembers })
    };

    nonBandMembersStartWith=()=>{

        const typedUsername = this.state.typedUsername;


        const addMemberToBand = this.addMemberToBand;


        let toDisplayArtists =this.state.nonBandMembers.filter((artist, index)=>{

            return artist.username.startsWith(typedUsername)

        });



        return <ul className="list-group" style={{width: '100%'}}>
            {toDisplayArtists.map((artist, index)=>{
                    return <li className="list-group-item" key ={index}
                               style={{cursor: 'pointer'}}
                               onClick={()=>{ addMemberToBand(artist._id)  }  }
                    >
                        {artist.username}
                    </li>
                })
            }
        </ul>


    };

    getArtists=(cb)=>{
        this.userService.getArtists().then(
            artists=>{console.log(artists);
                this.setState({artists : artists.data},
                    ()=>{if(cb) cb()}
                    )
            }
        ).catch(err=>this.setState({error : err.response.data}))

    };

    handleKickOut=( artistId)=>{
        const bandId = this.props.match.params.bandId;

        const payload = {
            artistId : artistId,
            bandId: bandId
        };


        alert(bandId + " ----" + artistId);
        console.log(payload);
        this.userService.deleteMember(payload).then(
            data=>{
                console.log("deleted Successfully");
                alert("Deleted successfully ! Please refresh to see the changes");
                console.log(data);
                this.getArtists();
            }
        ).catch(
            err =>{
                alert("error while kicking out meber");
                console.log(err);
                const errorString =  JSON.stringify( err.data);
                this.setState({error : errorString})
            }

        )

    };

    addMemberToBand=(artistId,cb)=>{
        const bandId = this.props.match.params.bandId;
        const payload= {
            artistId: artistId,
            bandId: bandId
        };
        this.userService.addMember(payload).then(
            data=>{
                console.log("added successfully");
                alert("Added successfully ! Please refresh to see the changes");
                console.log(data);
                this.getArtists();
            }
        ).catch(err=>{
            console.log(err.response.data);

            this.setState({ error : err.response.data.error.toString()})
        });

        this.getArtists( this.setState({typedUsername:''})
        );
        if (cb) cb();

    };

    componentDidMount(){

        this.getArtists(this.setBandMembers);


    }
    render(){
        return <div>

            <div className="container-fluid ">
                <div className="row">
                    <h1>Manage Network</h1>

                </div>
            {
                !!this.state.error && <div className="container-fluid jumbotron">
                    <h1>Error</h1>
                    <p>{this.state.error.toString()}</p>
                </div>
            }

            {!this.state.artists &&
            <div className="container-fluid jumbotron">
                <h1>Loading...</h1>
            </div>}


            <div className="container-fluid row col-md-8 col-sm-12 mx-auto">

                <div className="input-group mb-3">

                    <input type="text" className="form-control"
                           placeholder="Type the username"
                           aria-label="Default"
                           aria-describedby="inputGroup-sizing-default"
                           onChange={(e)=>{this.setState({typedUsername: e.target.value})}}
                    />


                    <div className="input-group-append">
                        <button className="btn btn-outline-success" disabled={true}>
                            Add member
                        </button>
                    </div>

                    {
                        this.state.nonBandMembers && this.nonBandMembersStartWith()
                    }
                </div>


            </div>

                <div className="row container-fluid">
                    <h4>Current Band Members</h4>
                </div>

            {this.state.bandMembers &&
            <div>
                <div className="container-fluid ">


                        <div className="container-fluid card-deck">
                            {this.state.bandMembers.map((artist, index)=>{
                                return  <div key={index} className="card" style=
                                    {{maxWidth: 300, maxHeight: 300}}>
                                    <img className="card-img-top container-fluid"
                                         src="https://picsum.photos/100/100"
                                         alt="Card image cap" style={{}}/>
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            {artist.firstName + "  " + artist.lastName}</h5>
                                        <div className="container-fluid row ">

                                            <div className="col-3 mx-auto my-auto">

                                                <button type="button"
                                                        className="btn btn-outline-danger"
                                                        onClick={()=>{
                                                            this.handleKickOut(artist._id)
                                                        }
                                                        }
                                                >KickOut</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>

                </div>
            </div>}

        </div>


        </div>


    }
}
