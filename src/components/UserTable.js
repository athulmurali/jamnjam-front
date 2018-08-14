import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import AlertDialog from "./AlertDialog";
import {UserService} from "../services/api/user";
import {connect} from "react-redux";
import {CLOSE_SIDE_BAR, SELECT_USER} from "../redux/Constants/userAccount";
import {Link, Redirect} from "react-router-dom";
import {SET_UPDATE_MODE} from "../redux/Constants/userRegister";


const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {

    },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
    id += 1;
    return { id, name, calories, fat, carbs, protein };
}


function SimpleTable(props) {


    const { classes } = props;

    console.log(props)

    props.resetSideBar()


    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>username</TableCell>
                        <TableCell>role</TableCell>

                        <TableCell>Edit</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.users.map((user,index) => {
                        return (
                            <TableRow key={index}>
                                 <TableCell component="th" scope="row">
                                        <Link to={"/" + user.role +"/" + user._id}
                                              style={{ textDecoration: 'none' ,color: 'inherit'}}>
                                        {user.username}
                                        </Link>
                                    </TableCell>


                                <TableCell >{user.role}</TableCell>
                                <TableCell>

                                    <div className="row">



                                            <IconButton className={classes.button} aria-label="Edit"
                                                        onClick={()=>{
                                                            props.selectUser(user)
                                                            props.setUpdateMode(true,props.selectedUser)// this.props.history.
                                                        }}>
                                                <EditIcon />

                                                {
                                                    (props.selectedUser && props.updateMode) &&
                                                    (props.setUpdateMode(true,props.selectedUser)

                                                        ||

                                                        <Redirect
                                                            to={'/' + props.selectedUser.role +
                                                            '/editProfile/' +
                                                            props.selectedUser._id}/>

                                                    )





                                                }


                                            </IconButton>




                                        <AlertDialog userToDelete={user}
                                                     open={true} message={"Please select confirm to proceed"}/>
                                    </div>

                                </TableCell>
                            </TableRow>
                        );
                    })}



                </TableBody>
            </Table>
        </Paper>
    );
}




SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

const simpleTable =  withStyles(styles)(SimpleTable);
const mapStateToProps = state => {
    return {
        isLoggedIn : state.userAccountReducer.isLoggedIn,
        myProfile : state.loginReducer.profile,
        selectedUser : state.userAccountReducer.selectedUser,
        updateMode : state.userRegistrationReducer.updateMode
    }

}


const mapDispatchToProps = (dispatch) =>({
    selectUser : (userData) =>{
        dispatch({type : SELECT_USER,
            payload: userData})
    },


    setUpdateMode : (booleanValue,selectedUser) =>{
        dispatch({type : SET_UPDATE_MODE,
            payload: {
                selectedUser : selectedUser,
                updateMode : booleanValue}})
    },

    resetSideBar: ()=> {
        dispatch({type :CLOSE_SIDE_BAR})
    }


})


export default connect(mapStateToProps, mapDispatchToProps)(simpleTable);

