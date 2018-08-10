import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import {mailFolderListItems, otherMailFolderListItems} from './titleData';
import {connect} from "react-redux";
import {CLOSE_SIDE_BAR, OPEN_SIDE_BAR} from "../redux/Constants/userAccount";


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

        const sideList = (
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
                        {sideList}
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
        isSideBarOpen : state.userAccountReducer.isSideBarOpen
    }

}


const mapDispatchToProps = (dispatch) =>({

    openSideBar: () => {dispatch( {type: OPEN_SIDE_BAR})},
    closeSideBar: () => {dispatch( {type: CLOSE_SIDE_BAR})},

})

export default connect(mapStateToProps, mapDispatchToProps)( withStyles(styles)(DrawerMenu));
