// This file is shared across the demos.

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarsIcon from '@material-ui/icons/Star';
import MailIcon from '@material-ui/icons/Mail';
import PersonIcon from '@material-ui/icons/PersonOutline'

export const mailFolderListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
        </ListItem>
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
            <ListItemText primary="Artist lookOut" />
        </ListItem>

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
