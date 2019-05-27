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
import MembersChip from "../MembersChip";
import {connect} from "react-redux";
import {GET_PROFILE} from "../../redux/constants/userRegister";
import {UserService} from "../../services/api/user";
import {Link} from "react-router-dom";
import {NO_IMG_PICTURE} from "../../const/url";

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
        paddingTop: '56.25%',
        // 16:9
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


class BandProfile extends React.Component {

    componentDidMount() {

        this.getBandInfo()

    }


    getBandInfo = () => {

        const getUserServiceObj = new UserService();

        this.props.getProfile(getUserServiceObj.getUser('band', this.props.match.params.userId))
    };


    render() {
        return <div>

            {this.props.currentProfile && <div style={styles.masterContainer}>
                <div style={styles.container}>
                    <h1>Band page</h1>
                </div>

                <div style={styles.container}>

                    <CardMedia style={styles.card}>
                        <img style={styles.cardMedia}
                             src={this.props.currentProfile.img || NO_IMG_PICTURE}
                             alt={"Profile picture"}
                        />
                    </CardMedia>
                    <Card style={styles.card}>
                        <CardContent>
                            <Typography style={styles.title} color="textSecondary">
                                Band Name
                            </Typography>
                            <Typography variant="headline" component="h2">
                                {/*{this.state.artistInfo.name}*/}
                                {this.props.currentProfile.title}
                            </Typography>
                            <List>
                                <ListItem button divider disabled>
                                    <ListItemText primary="Location -zip"
                                                  secondary={this.props.currentProfile.zip}/>
                                </ListItem>
                                <ListItem button divider>
                                    <ListItemText primary="Fans"
                                                  secondary={123456}/>
                                </ListItem>
                            </List>


                            <Typography style={styles.pos} color="textSecondary">
                                Members
                            </Typography>

                            <MembersChip
                                img={null}
                                members={this.props.currentProfile.members}
                                editMode={false}
                            />


                            <Typography style={styles.pos} color="textSecondary">
                                ABOUT
                            </Typography>
                            <Typography component="p">
                                {/*{this.state.artistInfo.bio.summary}*/}
                                {this.props.currentProfile.bio}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <div className="row">
                                <div className="col-6">
                                    <Button color="primary" size="small" disabled>Contact</Button>
                                </div>
                                {(this.props.match.params.userId ===
                                    localStorage.getItem('currentId')) && <div className="col-6">
                                    <Link to={'/band/editProfile/' + localStorage.getItem('currentId')}
                                          style={{textDecoration: 'none', color: 'inherit'}}>
                                        <Button color="primary" size="small">Edit</Button>
                                    </Link>

                                </div>}

                            </div>


                        </CardActions>

                    </Card>

                </div>
            </div>}

        </div>


    }
}


const mapStateToProps = state => {
    return {...state.loginReducer}
};


const mapDispatchToProps = (dispatch) => ({

    getProfile: (promise) => {
        dispatch({
            type: GET_PROFILE,
            payload: promise
        })
    }


});

export default connect(mapStateToProps, mapDispatchToProps)(BandProfile);

