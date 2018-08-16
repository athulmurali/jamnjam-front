import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/es/Button/Button";
import Redirect from "react-router-dom/es/Redirect";
import Link from "react-router-dom/es/Link";

const styles = theme => ({
    card: {
        display: 'flex',
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


    return (
        <div>
            <Card className={classes.card}
            style={{

                justifyContent: "space-around"
            }}>


                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography variant="headline">{props.title}</Typography>
                        <Typography variant="subheading" color="textSecondary">
                            {props.subtitle}
                        </Typography>
                    </CardContent>
                    <div className={classes.controls}>


                            <Button variant="contained" color="primary" className={classes.button}>

                                {
                                    !!props.loggedIn ?
                                    <Link to="/booking" style={{
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

                        window.location= props.site


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
