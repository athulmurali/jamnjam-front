import React from "react";
import TextField from "@material-ui/core/es/TextField/TextField";
import Button from "@material-ui/core/es/Button/Button";

const styles = theme => ({
    container: {
        textAlign:"center",
        margin:"auto",
        justifyContent:"center",
        alignSelf:"center"
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
});




export default  class  Booking extends  React.Component{
    constructor(props)
    {
        super(props)
    }
    render(){

        return (
            <div style={styles.container}>
                <h1 style={styles.container}>
                    Check availability
                </h1>
                <form className={styles.container} noValidate>
                    <TextField
                        id="datetime-local"
                        label="Next appointment"
                        type="datetime-local"
                        defaultValue="2017-05-24T10:30"
                        style={styles.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </form>
                <Button variant="contained" color={"primary"}>Book</Button>
            </div>

        );
    }


}
