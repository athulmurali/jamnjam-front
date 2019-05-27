import React from "react"
import Card from "@material-ui/core/es/Card/Card";
import CardContent from "@material-ui/core/es/CardContent/CardContent";
import Typography from "@material-ui/core/es/Typography/Typography";
import CardActions from "@material-ui/core/es/CardActions/CardActions";
import Button from "@material-ui/core/es/Button/Button";
import CardMedia from "@material-ui/core/es/CardMedia/CardMedia";
import ListItem from "@material-ui/core/es/ListItem/ListItem";
import ListItemText from "@material-ui/core/es/ListItemText/ListItemText";
import List from "@material-ui/core/es/List/List";
import {connect} from "react-redux";
import {GET_PROFILE} from "../../redux/constants/userRegister";
import UserServiceWithToken from "../../services/UserServiceWithToken";
import * as roles from "../../const/userRoles";
import {UserService} from "../../services/api/user";
import {Link} from "react-router-dom";
import {NO_IMG_PICTURE} from "../../const/url";
import MembersChip from "../MembersChip";

const userService = new UserService();

const styles = {
    masterContainer: {
        display: "flex",
        flexFlow: "column wrap",
        alignSelf: "center",
        justifyContent: "space-around",


    },
    container: {
        display: 'flex',
        flexFlow: "row wrap",
        flex: 1,
        alignSelf: "space-around",
        justifyContent: "center",


    },
    card: {

        display: "flex",
        flexDirection: "column",
        flex: 1,
        minWidth: 250,
        justifyContent: "space-around",
        // backgroundColor:"grey",
        borderColor: "grey",
        borderWidth: "2"

    },
    cardMedia: {
        alignSelf: "center",
        justifyContent: "space-around",
        borderRadius: 10,
        maxWidth: 300,
        maxHeight: 300
    },
    cover: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

class ArtistProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            artistInfo: {}
        }

    }

    componentDidMount() {
        const getUserServiceObj = new UserServiceWithToken();
        this.props.getMyProfile(getUserServiceObj.getProfile);
        const currentArtistId = this.props.match.params.artistId;
        const currentRole = roles.ARTIST;
        userService.getUser(currentRole, currentArtistId)
            .then(res => this.setState({artistProfile: res.data}))
            .catch(error => console.log(error));

    }

    render() {
        if (!this.state.artistProfile) return null;
        else return (
            <div style={styles.masterContainer}>
                <div style={styles.container}>
                    <h1>Artist page</h1>
                </div>


                <div style={styles.container}>


                    <CardMedia style={styles.card}>


                        <img style={styles.cardMedia}

                            // src={this.state.artistInfo.image[3]["#text"]}

                             src={this.state.artistProfile.img ||
                             NO_IMG_PICTURE}
                        />
                    </CardMedia>
                    <Card style={styles.card}>
                        <CardContent>


                            <Typography style={styles.title} color="textSecondary">
                                Artist Name
                            </Typography>
                            <Typography variant="headline" component="h2">
                                {/*{this.state.artistInfo.name}*/}
                                {this.state.artistProfile.firstName + " " + this.state.artistProfile.lastName}
                            </Typography>


                            <List>
                                <ListItem button divider disabled>
                                    <ListItemText primary="Location - Zip" secondary={this.state.artistProfile.zip}/>
                                </ListItem>
                                <ListItem button divider disabled>
                                    {/*<ListItemText primary="Fans" secondary={this.state.artistInfo.stats.listeners} />*/}
                                    <ListItemText primary="Fans" secondary={12345}/>

                                </ListItem>
                                <Typography style={styles.pos} color="textSecondary">
                                    Plays with
                                </Typography>
                                <ListItem>
                                    <MembersChip

                                        img={""}

                                        members={this.state.artistProfile.memberOf}
                                        editMode={false}
                                    />

                                </ListItem>
                            </List>


                            <Typography style={styles.pos} color="textSecondary">
                                ABOUT
                            </Typography>
                            <Typography component="p">
                                {this.state.artistProfile.bio}

                            </Typography>
                        </CardContent>
                        <CardActions>
                            <div className="row">
                                <div className="col-6">
                                    <Button color="primary" size="small" disabled>Contact</Button>
                                </div>
                                {(this.props.match.params.artistId ===
                                    localStorage.getItem('currentId')) &&
                                <div className="col-6">
                                    <Link to={'/artist/editProfile/' + localStorage.getItem('currentId')}
                                          style={{textDecoration: 'none', color: 'inherit'}}>
                                        <Button color="primary" size="small">Edit</Button>
                                    </Link>

                                </div>}
                            </div>


                        </CardActions>

                    </Card>

                </div>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {...state}
};

const mapDispatchToProps = (dispatch) => ({

    getMyProfile: (promise) => {
        dispatch({
            type: GET_PROFILE,
            payload: promise
        })
    },


    // getCurrentArtistProfile:()=>{
    //
    // }

});


export default connect(mapStateToProps, mapDispatchToProps)(ArtistProfile);
