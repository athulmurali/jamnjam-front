import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    chip: {
        margin: theme.spacing.unit,
    },
});



function handleDelete() {
    alert('You clicked the delete icon.'); // eslint-disable-line no-alert
}

function handleClick() {
    alert('You clicked the Chip.'); // eslint-disable-line no-alert
}

function MembersChip(props) {
    const { classes } = props;

        return (

            props.members.map( (member,index)=>{

                return !!props.editMode ?
                <Chip
                    key = {index}
                    avatar={<Avatar src={props.img} />}
                    label={member.name}
                    onDelete={handleDelete}
                    className={classes.chip}
                />

                :
                <Chip
                    key = {index}
                    avatar={<Avatar>{member.firstName.charAt(0) +
                    member.lastName.charAt(0)}</Avatar>}
                    label={member.firstName + " " + member.lastName}
                    onClick={handleClick}
                    className={classes.chip}
                />



            }))}

MembersChip.propTypes = {
    classes: PropTypes.object.isRequired,
    members: PropTypes.array.isRequired,
    editMode:PropTypes.bool.isRequired,
};

export default withStyles(styles)(MembersChip);
