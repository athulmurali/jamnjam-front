import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/es/Button/Button";
import Link from "react-router-dom/es/Link";
import {PATH_BOOK_ARTIST} from "../../const/routeConstants";
import * as roles from "../../const/userRoles";

const styles = theme => ({

    card: {
        display: 'flex',
        justifyContent: "space-between",
    },

    [theme.breakpoints.up('md')]: {
        card: {
            display: 'flex',
            justifyContent: "space-between",
            paddingLeft: '150px',
            paddingRight: '150px'

        },
    },


    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
        height: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
    },
    playIcon: {
        height: 38,
        width: 38,
    },
});

function UserCard(props) {
    const { classes, theme } = props;

    const myProfile = JSON.parse(localStorage.getItem('myProfile'));


    return (
        <div>
            <Card className={classes.card}>

                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography variant="headline">{props.title}</Typography>
                        <Typography variant="subheading" color="textSecondary">
                            {props.subtitle}
                        </Typography>
                    </CardContent>
                    <div className={classes.controls}>


                            <Button variant="contained" color="primary" className={classes.button}
                            disabled={
                                ( props.loggedIn && myProfile.role!==roles.BAND) || props.role=== roles.BAND
                            }

                            >
                                {
                                    !!props.loggedIn ?
                                    <Link to={PATH_BOOK_ARTIST +'?artistId='+props.mbid} style={{
                                        color: "White", textDecoration: "none"
                                    }}>Book</Link>

                                        :
                                        <Link to="/login" style={{
                                            color: "White", textDecoration: "none"
                                        }}>Login to book</Link>

                                }

                            </Button>


                        <Button variant="contained" color="secondary" className={classes.button}>
                            <Link to={'/'+ props.role + "/" + props.mbid }
                                  style={{color:"White",  textDecoration:"none"
                            }}>more</Link>

                        </Button>


                    </div>
                </div>
                <CardMedia
                    className={classes.cover}
                    image={props.imageUrl}
                    title="Live from space album cover"
                    onClick={()=>{

                        // window.location= props.site


                    }}
                    style={{cursor : "pointer"}}
                />
            </Card>
        </div>
    );
}

UserCard.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(UserCard);
