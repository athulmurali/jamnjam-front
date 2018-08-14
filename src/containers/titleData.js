// This file is shared across the demos.

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarsIcon from '@material-ui/icons/Star';
import MailIcon from '@material-ui/icons/Mail';
import PersonIcon from '@material-ui/icons/PersonOutline'
import {Link} from "react-router-dom";

export const mailFolderListItems = (
    <div>
        <Link to={'/admin'} style={{ textDecoration: 'none' ,color: 'inherit'}}>
        <ListItem button>


            <ListItemIcon>
                <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />

        </ListItem>
        </Link>

        <Link to={'/band/:_id/manageNetwork'} style={{ textDecoration: 'none' ,color: 'inherit'}}>
        <ListItem button>
            <ListItemIcon>
                <StarsIcon/>
            </ListItemIcon>
            <ListItemText primary="My Network" />
        </ListItem>
        </Link>


        <Link to={'/artist/:_id/artistLookOuts'}
              style={{ textDecoration: 'none' ,color: 'inherit'}}>
            <ListItem button>
                <ListItemIcon>
                    <StarsIcon/>
                </ListItemIcon>
                <ListItemText primary="Artist Lookouts" />
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
