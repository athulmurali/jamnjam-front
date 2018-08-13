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
import Artist from "../../services/lostFmServices/Artist";
import MembersChip from "../MembersChip";
import {connect} from "react-redux";
import {GET_PROFILE} from "../../redux/Constants/userRegister";
import {UserService} from "../../services/api/user";


const artist = Artist.instance

const styles = {
    masterContainer:{
        display:"flex",
        flexFlow:"column wrap",
        alignSelf:"center",
        justifyContent:"space-around",


    },
    container:{
        display: 'flex',
        flexFlow:"row wrap",
        flex:1,
        alignSelf:"space-around",
        justifyContent:"center",





    },
    card: {

        display: "flex",
        flexDirection:"column",
        flex:1,
        minWidth:250,
        justifyContent:"space-around",
        // backgroundColor:"grey",
        borderColor:"grey",
        borderWidth:"2"

    },
    cardMedia:{alignSelf:"center",justifyContent:"space-around", borderRadius: 10},
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


class BandProfile extends React.Component{
    constructor(props){
        super(props)


    }
    componentDidMount(){

        this.getBandInfo()

    }


    getBandInfo=()=>{

        const getUserServiceObj = new UserService();

        this.props.getProfile(getUserServiceObj.getUser('band', this.props.match.params.mbid))
    }




    members = [
        {_id : '1axaxcxc', name:'Eminem'},
        {_id : '1axaxcb',  name:'Usher'},
        {_id : '1axaxcd',  name:'Ed Sheeran'},]




    render(){ return <div>

        {this.props.currentProfile && <div style={styles.masterContainer}>
            <div style={styles.container}>
                <h1>Band page</h1>
            </div>

            <div style={styles.container}>

                <CardMedia style={styles.card}>
                    <img style={styles.cardMedia}
                         src={this.props.currentProfile.img}
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
                                <ListItemText primary="Rank" secondary={"Unavailable"}/>
                            </ListItem>
                            <ListItem button divider >
                                <ListItemText primary="Fans"
                                              secondary={123456} />
                            </ListItem>
                        </List>


                        <Typography style={styles.pos} color="textSecondary">
                            Members
                        </Typography>

                        <MembersChip

                            img={""}

                            members = {this.members}
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
                        <Button  color="primary" size="small">Contact</Button>
                    </CardActions>
                </Card>

            </div>
        </div>}

    </div>




    }
}



const mapStateToProps = state => {
    return {...state.loginReducer}
}


const mapDispatchToProps = (dispatch) =>({

    getProfile: (promise)=>{
        dispatch({
            type : GET_PROFILE,
            payload: promise
        })
    }


})

export default  connect(mapStateToProps, mapDispatchToProps)(BandProfile);

