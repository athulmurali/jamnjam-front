import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import {mailFolderListItems, otherMailFolderListItems} from './titleData';
import {connect} from "react-redux";
import {CLOSE_SIDE_BAR, OPEN_SIDE_BAR} from "../redux/Constants/userAccount";
import * as roles from "../const/userRoles";
import {AdminListBottom, AdminListTop} from "./adminTitleData";
import {ArtistListBottom, ArtistListTop} from "./artistTitleData";


const styles = {
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },

    root: {
        flexGrow: 1,
    },
    flex: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class DrawerMenu extends React.Component {
    state = {
        top: false,
        left: false,
        bottom: false,
        right: false,
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {
        const { classes } = this.props;

        if(this.props.profile)
        {
            localStorage.setItem('currentId', this.props.profile._id)

        }

        const sideListAdmin = (
            <div className={classes.list}>
                <List>{AdminListTop}</List>
                <Divider />
                <List>{AdminListBottom}</List>
            </div>
        );



        const sideListArtist = (
            <div className={classes.list}>
                <List>{ArtistListTop}</List>
                <Divider />
                <List>{ArtistListBottom}</List>
            </div>
        );


        const sideListBand = (
            <div className={classes.list}>
                <List>{mailFolderListItems}</List>
                <Divider />
                <List>{otherMailFolderListItems}</List>
            </div>
        );


        return (
            <div>
                <Drawer open={this.props.isSideBarOpen}
                        onClose={this.props.closeSideBar}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}
                    >
                        {this.props.role== roles.ADMIN && sideListAdmin}

                        {this.props.role== roles.BAND && sideListBand}


                        {this.props.role== roles.ARTIST && sideListArtist}

                    </div>
                </Drawer>
            </div>
        );
    }
}

DrawerMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    return {
        isSideBarOpen : state.userAccountReducer.isSideBarOpen,
        profile : state.loginReducer.profile,
        myProfile: JSON.parse(localStorage.getItem('myProfile'))

    }

};


const mapDispatchToProps = (dispatch) =>({

    openSideBar: () => {dispatch( {type: OPEN_SIDE_BAR})},
    closeSideBar: () => {dispatch( {type: CLOSE_SIDE_BAR})},

});

export default connect(mapStateToProps, mapDispatchToProps)( withStyles(styles)(DrawerMenu));
