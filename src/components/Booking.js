import React from "react";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';


import {DateRangePicker} from 'react-dates';

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

    constructor(props) {
        super(props);
        this.state = {
            startDate: null,
            endDate: null,
            focusedInput: null,
        };
    }
    render(){

        return (
            <div className="container-fluid flex-column row">
                <div> Not for grading </div>


                <div className="col-6">
                    <DateRangePicker
                        startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                        startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                        endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                        endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                        onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                        focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                        onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                    />
                </div>


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

            </div>

        );
    }


}
