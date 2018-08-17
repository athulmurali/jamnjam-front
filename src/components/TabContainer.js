import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import UserTable from "./UserTable";
import {Users} from "../services/api/Users";
import {ADMIN, ARTIST, BAND} from "../const/userRoles";
import {connect} from "react-redux";

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
});






    class SimpleTabs extends React.Component {

    state = {
        value: 0,
        users : []
    };

    handleChange = (event, value) => {
        this.setState({ value });
      this.getAllUsersFromServer();
    };
    componentDidMount(){
        this.getAllUsersFromServer();
    }


    getAllUsersFromServer = ()=>{
    const users = new Users();


    users.getAllUsers().
    then(result=>{

        const data =result.data;
        const allUsers = [];
        const jointArray = allUsers.concat(data.admins, data.bands, data.artists);
        this.setState({
             users : jointArray
        });

        console.log(jointArray);

        return jointArray

    })
};


    render(){

        const { classes } = this.props;
        const { value } = this.state;
        const { users } = this.state;


        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Tabs value={value} onChange={this.handleChange} centered>
                        <Tab label="Artists" />
                        <Tab label="Bands" />
                        <Tab label="Admin" />
                        <Tab label="All" />
                    </Tabs>
                </AppBar>
                {value === 0 &&
                <TabContainer>
                    <UserTable
                        users ={users.filter(user=>{return user.role=== ARTIST})}
                    ></UserTable>
                </TabContainer>}
                {value === 1 &&
                <TabContainer>
                    <UserTable
                        users ={users.filter(user=>{return user.role=== BAND})}
                    ></UserTable>

                </TabContainer>}
                {value === 2 &&
                <TabContainer>

                    <UserTable
                        users ={users.filter(user=>{return user.role=== ADMIN})}
                    ></UserTable>


                </TabContainer>}
                {value === 3 && <TabContainer>
                    <UserTable users ={users}
                    ></UserTable>
                </TabContainer>}

            </div>
        );
    }
}

SimpleTabs.propTypes = {
    classes: PropTypes.object.isRequired,
};

const styledSimpleTabs =  withStyles(styles)(SimpleTabs);

const mapStateToProps = state => {
    return {
        isLoggedIn : state.userAccountReducer.isLoggedIn,
        myProfile : state.loginReducer.profile
    }

};


const mapDispatchToProps = (dispatch) =>({


    getAllUsersFromServer : ()=>{}
});


export default connect(mapStateToProps, mapDispatchToProps)(styledSimpleTabs);

