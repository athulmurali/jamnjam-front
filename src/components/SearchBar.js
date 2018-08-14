import React from 'react';
import PropTypes from 'prop-types';
import {createMuiTheme, withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from "@material-ui/core/es/Button/Button";


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing.unit,
    },
    cssLabel: {
        '&$cssFocused': {
            color: purple[500],
        },
    },
    cssFocused: {},
    cssUnderline: {
        '&:after': {
            borderBottomColor: purple[500],
        },
    },
    bootstrapRoot: {
        padding: 0,
        'label + &': {
            marginTop: theme.spacing.unit * 3,
        },
    },
    bootstrapInput: {
        borderRadius: 4,
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 12px',
        width: 'calc(100% - 24px)',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
    bootstrapFormLabel: {
        fontSize: 18,
    },
});

const theme = createMuiTheme({
    palette: {
        primary: green,
    },
});




 export default class  SearchBar extends React.Component {


     constructor(props){
         super(props);

         this.state = {
             value: 'artist',
             accountType : 'CELEBRITY'
         };

     }

     componentDidMount() {
         console.log('SearchBar : Component mounted ')
     }


     handleChange = event => {
         this.setState({ value: event.target.value });
     };


     handleAccountTypeChange =event=>{
         this.setState({ accountType: event.target.value });

     }
     fun=()=>{
         console.log("material ui is fun !")

     }


     render() {
         return (
             <div
                  style={{
                      margin: 10,
                      alignContent: "center",
                      justifyContent: "center",
                      alignItems: "center"
                  }}>
                 <Paper>

                     <RadioGroup
                         aria-label="Type"
                         name="type"
                         className={styles.group}
                         value={this.state.accountType}
                         onChange={this.handleAccountTypeChange}
                         style={{
                             alignContent: "center",
                             justifyContent: "center",
                             alignItems: "center",
                             flexDirection: "row"
                         }}
                     >

                         <FormControlLabel value="CELEBRITY" control={<Radio color="primary"/>} label="CELEBRITY"/>
                         <FormControlLabel value="FREE" control={<Radio color="primary"/>} label="Free"/>
                     </RadioGroup>
                     <TextField
                         defaultValue=""
                         fullWidth={true}
                         placeholder="Enter a country name"
                         label="Search"
                         id="bootstrap-input"
                         InputProps={{
                             disableUnderline: true,
                             classes: {
                                 root: styles.bootstrapRoot,
                                 input: styles.bootstrapInput,
                             },
                         }}
                         InputLabelProps={{
                             shrink: true,
                             className: styles.bootstrapFormLabel,
                         }}
                         onChange={(event)=>{
                             this.props.onChangeText(event.target.value)

                         }}
                     />




                     {this.state.accountType == "CELEBRITY"
                     &&
                     <div>
                         <Button variant="contained" color="default"
                                 onClick={
                                     ()=>{
                                         console.log("asdasd")
                                         this.props.onPressSearch();
                                     }}>
                             Search
                         </Button>

                     </div>

                     }

                     {this.state.accountType == "FREE"
                     &&
                         <div>
                             <Button variant="contained" color="default"
                                     onClick={
                                         ()=>{
                                             console.log("asdasd")
                                             this.props.onPressSearch();
                                         }}>
                                 Search
                             </Button>
                             <RadioGroup
                                 aria-label="Type"
                                 name="type"
                                 className={styles.group}
                                 value={this.state.value}
                                 onChange={this.handleChange}
                                 style={{
                                     alignContent: "center",
                                     justifyContent: "center",
                                     alignItems: "center",
                                     flexDirection: "row"
                                 }}
                             >

                                 <FormControlLabel value="artist" control={<Radio color="primary"/>} label="Artist"/>
                                 <FormControlLabel value="band" control={<Radio color="primary"/>} label="Band"/>
                             </RadioGroup>
                         </div>

                     }

                 </Paper>

                 <Paper>

                 </Paper>

             </div>
         );
     }
}






