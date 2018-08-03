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
import EditIcon from '@material-ui/icons/Edit';
import AlertDialog from "./AlertDialog";


const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
    id += 1;
    return { id, name, calories, fat, carbs, protein };
}
//
// let data = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

function SimpleTable(props) {


    const { classes } = props;

    console.log(props)

    const handleClickDelete=()=>{

        this.setState({

        })
    }

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>username</TableCell>
                        <TableCell>role</TableCell>
                        <TableCell>address</TableCell>
                        <TableCell>email</TableCell>
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
                                <TableCell numeric>{n.role}</TableCell>
                                <TableCell numeric>{n.address}</TableCell>
                                <TableCell numeric>{n.emailId}</TableCell>
                                <TableCell numeric>
                                    <IconButton className={classes.button} aria-label="Delete"
                                                onClick={()=>{alert("hi")}}>
                                        <EditIcon />
                                    </IconButton>

                                    <AlertDialog open={true} message={"Please select confirm to proceed"}/>
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
