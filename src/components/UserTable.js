import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AlertDialog from "./AlertDialog";
import {UserService} from "../services/api/user";


const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {

    },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
    id += 1;
    return { id, name, calories, fat, carbs, protein };
}


function SimpleTable(props) {


    const { classes } = props;

    console.log(props)

    const handleClickDelete=(role,id)=>{
        const userService = new UserService();
    }

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>username</TableCell>
                        <TableCell>role</TableCell>

                        <TableCell>Edit</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.users.map((n,index) => {
                        return (
                            <TableRow key={index}>
                                <TableCell component="th" scope="row">
                                    {n.username}
                                </TableCell>
                                <TableCell >{n.role}</TableCell>
                                <TableCell>
                                    <IconButton className={classes.button} aria-label="Delete"
                                                onClick={()=>{alert("hi")}}>
                                        <DeleteIcon />
                                    </IconButton>

                                    <AlertDialog
                                        open={true} message={"Please select confirm to proceed"}/>
                                </TableCell>
                            </TableRow>
                        );
                    })}



                </TableBody>
            </Table>
        </Paper>
    );
}




SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
