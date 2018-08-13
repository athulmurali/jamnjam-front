import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {connect} from "react-redux";
import {DELETE_USER, SELECT_USER} from "../redux/Constants/userAccount";
import {UserService} from "../services/api/user";
import {IconButton} from "material-ui";

class AlertDialog extends React.Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.props.selectUser( this.props.userToDelete)
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleConfirmDelete= ()=>{
            const userService = new UserService();
            const promise = userService.deleteUser(
                this.props.selectedUser.role,
                this.props.selectedUser._id)
            this.props.deleteUser(promise)
            this.handleClose();
    }

    componentDidMount(){

    }
    render() {
        return (
            <div>
                <Button onClick={this.handleClickOpen}>Delete</Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Delete Confirmation"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {
                                this.props.message

                            }
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary" autoFocus>
                            Cancel
                        </Button>
                        <Button onClick={this.handleConfirmDelete}

                            color="primary"  >
                            Confirm
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        isLoggedIn : state.userAccountReducer.isLoggedIn,
        myProfile : state.loginReducer.profile,
        selectedUser : state.userAccountReducer.selectedUser
    }

}


const mapDispatchToProps = (dispatch) =>({
    selectUser : (userData) =>{
        dispatch({type : SELECT_USER,
            payload: userData})
    },

    deleteUser: (promise)=>{
        dispatch({
            type: DELETE_USER,
            payload:promise,

    })

    }

})


export default connect(mapStateToProps, mapDispatchToProps)(AlertDialog);

