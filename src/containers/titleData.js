// This file is shared across the demos.

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarsIcon from '@material-ui/icons/Star';
import MailIcon from '@material-ui/icons/Mail';
import PersonIcon from '@material-ui/icons/PersonOutline'
import HomeIcon from '@material-ui/icons/Home'

import AlertIcon from '@material-ui/icons/AddAlert'

import {Link} from "react-router-dom";

export const mailFolderListItems = (
    <div>
        <Link to={'/profileByRole'} style={{ textDecoration: 'none' ,color: 'inherit'}}>
        <ListItem button>


            <ListItemIcon>
                <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />

        </ListItem>
        </Link>


        <Link to={'/home'}
              style={{ textDecoration: 'none' ,color: 'inherit'}}>
            <ListItem button>
                <ListItemIcon>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
            </ListItem>
        </Link>




        <Link to={'/band/'+ localStorage.getItem('currentId') + '/addLookOut/'}
              style={{ textDecoration: 'none' ,color: 'inherit'}}>
            <ListItem button>
                <ListItemIcon>
                    <AlertIcon />
                </ListItemIcon>
                <ListItemText primary="Add Lookout" />
            </ListItem>
        </Link>




        <Link to={'/band/'+localStorage.getItem('currentId')+'/manageNetwork'} style={{ textDecoration: 'none' ,color: 'inherit'}}>
        <ListItem button>
            <ListItemIcon>
                <StarsIcon/>
            </ListItemIcon>
            <ListItemText primary="My Network" />
        </ListItem>
        </Link>

    </div>
);

export const otherMailFolderListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Become a pro user" />
        </ListItem>

    </div>
);
