import React from "react"
import Card from "@material-ui/core/es/Card/Card";
import CardContent from "@material-ui/core/es/CardContent/CardContent";
import Typography from "@material-ui/core/es/Typography/Typography";
import CardActions from "@material-ui/core/es/CardActions/CardActions";
import Button from "@material-ui/core/es/Button/Button";
import CardMedia from "@material-ui/core/es/CardMedia/CardMedia";
import FormGroup from "@material-ui/core/es/FormGroup/FormGroup";
import FormControlLabel from "@material-ui/core/es/FormControlLabel/FormControlLabel";
import ListItem from "@material-ui/core/es/ListItem/ListItem";
import ListItemText from "@material-ui/core/es/ListItemText/ListItemText";
import List from "@material-ui/core/es/List/List";



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
        backgroundColor:"white",

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





export default class ArtistProfile extends React.Component{
    constructor(props){
        super(props)

    }
    render(){

        const bull = <span className={styles.bullet}>•</span>;

        return(


            <div style={styles.masterContainer}>
                <div style={styles.container}>
                    <h1>Artist page</h1>
                </div>

            <div style={styles.container}>

                <CardMedia style={styles.card}>

                        <img style={{alignSelf:"center",justifyContent:"space-around", borderRadius: 10}}

                            src={"https://lastfm-img2.akamaized.net/i/u/300x300/fdc369923434b3ccb68a47aae0433a1f.png"}  />
                </CardMedia>
                <Card style={styles.card}>
                    <CardContent>
                        <Typography style={styles.title} color="textSecondary">
                            Artist Name
                        </Typography>
                        <Typography variant="headline" component="h2">
                            Ed Sheeran
                        </Typography>

                        <List>
                            <ListItem button divider disabled>
                                <ListItemText primary="Rank" secondary={"#1"}/>
                            </ListItem>
                            <ListItem button divider disabled>
                                <ListItemText primary="Fans" secondary="999999" />
                            </ListItem>
                        </List>





                        <Typography style={styles.pos} color="textSecondary">
                            adjective
                        </Typography>
                        <Typography component="p">
                            well meaning and kindly.<br />
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button  color="primary" size="small">Contact</Button>
                    </CardActions>
                </Card>

            </div>
            </div>

        )

    }
}
