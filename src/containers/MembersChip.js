import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import {NO_IMG_PICTURE} from "../const/url";
import {Link} from "react-router-dom";

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    chip: {
        margin: theme.spacing.unit,
        cursor: 'pointer'
    },
});



function handleDelete() {
    alert('You clicked the delete icon.'); // eslint-disable-line no-alert
}

function MembersChip(props) {
    const { classes } = props;

            const people =props.members;

            if(people)
                return (

                    people.map( (member,index)=>{
                        const name = member.title || member.firstName + " " +member.lastName;

                        return !!props.editMode ?
                            <Chip
                                key = {index}
                                avatar={<Avatar src={props.img} />}
                                label={member.name}
                                onDelete={handleDelete}
                                className={classes.chip}
                            />

                            :
                            <Link to={"/"+member.role + "/"+ member._id} style={{cursor:'pointer'}} key={index}>
                            <Chip
                                key = {index}
                                avatar={<Avatar src={member.img || NO_IMG_PICTURE} />}
                                label={name}
                                className={classes.chip}
                            />
                            </Link>
                    }));

            else return <div>Loading</div>


}

MembersChip.propTypes = {
    classes: PropTypes.object.isRequired,
    members: PropTypes.array.isRequired,
    editMode:PropTypes.bool.isRequired,
};

export default withStyles(styles)(MembersChip);
