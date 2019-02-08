import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {connect} from "react-redux";
import {ADMIN, ARTIST, BAND} from "../../const/userRoles";
import {UPDATE_ROLE} from "../../redux/Constants/userRegister";
import { REG_ADMIN_COVER, REG_ARTIST_COVER, REG_BAND_COVER} from "../../const/url";

const styles = theme => ({
    root: {
        margin : 'auto',
        flexGrow: 10,

    },
    paper: {
        height: 340,
        width: 300,
        margin: 'auto',
        alignItems: 'center',
        textAlign: 'center',
        cursor: 'pointer'


    },

    roleCover:{
        height: 250,
        width: 250,
        alignItems: 'center',
        textAlign: 'center',
        cursor: 'pointer'
    },

    control: {
        padding: theme.spacing.unit * 1,
    },
});

class RoleSelect extends React.Component {
    state = {
        spacing: '16',
    };

    handleChange = key => (event, value) => {
        this.setState({
            [key]: value,
        });
    };

    render() {
        const { classes } = this.props;
        const { spacing } = this.state;

        return (
            <Grid container className={classes.root} spacing={16}>

                <Grid item xs={12}>
                    <div className="row  text-center">
                        <div className="col">
                            <h1> Select a role</h1>

                        </div>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>

                            <Grid key={0} item>
                                <Paper className={classes.paper}
                                onClick={()=> this.props.selectRole(ADMIN)    }>
                                    <div>
                                        <h2>Admin</h2>

                                        <img src={REG_ADMIN_COVER}
                                             style={{width: '250px', height: '250px'}} />

                                    </div>
                                </Paper>
                            </Grid>

                            <Grid key={1} item>
                                <Paper className={classes.paper}

                                       onClick={()=> this.props.selectRole(ARTIST)    }>
                                <h2>Artist</h2>

                                <img src={REG_ARTIST_COVER}
                                     style={{width: '250px', height: '250px'}}
                                     alt="artist cover image"
                                />

                                </Paper>
                            </Grid>


                            <Grid key={2} item>
                                <Paper className={classes.paper}
                                       onClick={()=> this.props.selectRole(BAND)}>
                                <h2>Band</h2>

                                    <img src={REG_BAND_COVER} style={{width: '250px', height: '250px'}} />

                                </Paper>
                            </Grid>


                    </Grid>
                </Grid>

            </Grid>
        );
    }
}

RoleSelect.propTypes = {
    classes: PropTypes.object.isRequired,
};


const mapStateToProps = state => {
    return {
        selectedRole : state.userRegistrationReducer.role
    }
};


const mapDispatchToProps = (dispatch) =>({

    selectRole: (role) =>{dispatch({type: UPDATE_ROLE, payload : {role :role}})}

});



export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(RoleSelect));
