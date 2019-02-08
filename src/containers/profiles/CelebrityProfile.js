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
import {connect} from "react-redux";

import {withStyles} from "@material-ui/core/styles/index";

const artist = Artist.instance;

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
    cardMedia:{
        alignSelf:"center",
        justifyContent:"space-around",
        borderRadius: 10,
        maxWidth :300,
        maxHeight : 300
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





class CelebrityProfile extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }



    componentDidMount(){

        artist.getArtistInfo(this.props.match.params.userId).then(
            response=>{

                // console.log(response.data)

                this.setState({
                    artistInfo : response.data.artist
                },(()=>{ // console.log(this.state.artistInfo)
                         }))
            }
        ).catch(err=>{
            console.log(err)
        })
    }



    render(){

        const artistInfo = this.state.artistInfo;

        if (!artistInfo)   return <h1>Loading</h1>;


        if (!!artistInfo)
             return(

                <div style={styles.masterContainer}>
                    <div style={styles.container}>
                        <h1>Artist page</h1>
                    </div>
                    <div style={styles.container}>
                        <CardMedia style={styles.card}>
                            {
                                !! artistInfo.image &&
                                <img style={styles.cardMedia}
                                     src={artistInfo.image[3]["#text"]}
                                     alt={"artist card image"}
                                />
                            }
                        </CardMedia>
                        <Card style={styles.card}>
                            <CardContent>


                                <Typography style={styles.title} color="textSecondary">
                                    Artist Name
                                </Typography>
                                <Typography variant="headline" component="h2">
                                    {artistInfo.name}
                               </Typography>
                                <List>
                                    <ListItem button divider disabled>
                                        <ListItemText primary="Location - Zip" secondary={1234566}/>
                                    </ListItem>
                                    <ListItem button divider disabled>
                                        <ListItemText primary="Fans" secondary={artistInfo.stats.listeners} />

                                    </ListItem>

                                    {/*<ListItem>*/}
                                        {/*<Typography style={styles.pos} color="textSecondary">*/}
                                            {/*Similar to*/}
                                        {/*</Typography>*/}


                                        {/*<CelebrityChip nameLinkArray = {artistInfo.similar.artist}/>*/}

                                    {/*</ListItem>*/}



                                </List>





                                <Typography style={styles.pos} color="textSecondary">
                                    ABOUT
                                </Typography>
                                <Typography component="p">
                                    {artistInfo.bio.summary}

                                </Typography>
                            </CardContent>
                            <CardActions>
                                <div className="row">
                                    <div className="col-6">
                                        <Button  color="primary" size="small" disabled>Contact</Button>
                                    </div>

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






export default  connect(mapStateToProps)( withStyles(styles)(CelebrityProfile));
