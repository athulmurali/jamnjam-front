// This file is shared across the demos.

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarsIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';
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
