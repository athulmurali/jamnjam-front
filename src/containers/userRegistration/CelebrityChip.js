import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import {NO_IMG_PICTURE} from '../../const/url'
import {Link} from "react-router-dom";
import {Avatar} from "material-ui";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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



function CelebrityChip(props) {
    const { classes } = props;

            const nameLinkArray = props.nameLinkArray;

            if(nameLinkArray)
                return (

                    nameLinkArray.map( (nameLink,index)=>{

                        console.log(nameLink);


                        return<Link to={nameLink.url} style={{cursor:'pointer'}}
                                    key={index}>
                            <Chip
                                avatar={<Avatar src={NO_IMG_PICTURE} />}
                                label={nameLink.name}
                                className={classes.chip}
                            />
                            </Link>





                    }));

            else return <div>Loading</div>


}

CelebrityChip.propTypes = {
    classes: PropTypes.object.isRequired,
    nameLinkArray : PropTypes.array.isRequired

};

export default withStyles(styles)(CelebrityChip);
