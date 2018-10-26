// This file is shared across the demos.

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import PersonIcon from '@material-ui/icons/PersonOutline'
import HomeIcon from '@material-ui/icons/Home'

import {Link} from "react-router-dom";

export const AdminListTop = (
    <div>
        <Link to={'/admin'} style={{ textDecoration: 'none' ,color: 'inherit'}}>
        <ListItem button>
            <ListItemIcon>
                <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="AdminTools" />
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




    </div>
);

export const AdminListBottom = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Become a pro user" />
        </ListItem>

    </div>
);
