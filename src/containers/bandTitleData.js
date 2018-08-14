// This file is shared across the demos.

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarsIcon from '@material-ui/icons/Star';
import MailIcon from '@material-ui/icons/Mail';
import PersonIcon from '@material-ui/icons/PersonOutline'
import {Link} from "react-router-dom";

export const bandMailFolderListItems = ()=>(
    <div>
        <Link to={'/profileByRole'}
              style={{ textDecoration: 'none' ,color: 'inherit'}}>
            <ListItem button>
                <ListItemIcon>
                    <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="Profile" />

            </ListItem>
        </Link>


        <ListItem button>
            <ListItemIcon>
                <StarsIcon/>
            </ListItemIcon>
            <ListItemText primary="My Network" />
        </ListItem>

        <ListItem button>
            <ListItemIcon>
                <StarsIcon/>
            </ListItemIcon>
            <ListItemText primary="Post a lookout" />
        </ListItem>
    </div>
);

export const bandOtherMailFolderListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Become a pro user" />
        </ListItem>

    </div>
);
