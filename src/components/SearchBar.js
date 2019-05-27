import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import purple from '@material-ui/core/colors/purple';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from "@material-ui/core/es/Button/Button";
import {connect} from "react-redux";
import {UPDATE_SEARCH_ACCOUNT_TYPE, UPDATE_SEARCH_ROLE, UPDATE_ZIP} from "../redux/constants/searchConstants";


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

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            accountType: "FREE"
        };

    }

    componentDidMount() {
        console.log('SearchBar : Component mounted ')
    }

    handleChange = event => {
        this.setState({value: event.target.value});

        this.props.updateSearchRole(event.target.value)
    };
    handleAccountTypeChange = event => {
        this.setState({accountType: event.target.value});

        this.props.updateSearchAccountType(event.target.value)

    };

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

                        <FormControlLabel value="PRO" control={<Radio color="primary"/>} label="PRO"/>
                        <FormControlLabel value="FREE" control={<Radio color="primary"/>} label="Free"/>
                    </RadioGroup>
                    <TextField
                        defaultValue=""
                        width={'100%'}
                        placeholder={this.state.accountType === "PRO" ? "  country" : "zip"}
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
                        onChange={(event) => {
                            this.props.onChangeText(event.target.value);

                            this.props.updateSearchZip(event.target.value)

                        }}
                    />

                    {this.state.accountType === "PRO"
                    &&
                    <div>
                        <Button variant="contained" color="default"
                                onClick={
                                    () => {
                                        console.log("asdasd");
                                        this.props.onPressSearch();
                                    }}>
                            Search
                        </Button>

                    </div>

                    }

                    {this.state.accountType === "FREE"
                    &&
                    <div>
                        <Button variant="contained" color="default"
                                onClick={
                                    () => {
                                        console.log("asdasd");
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
                            <FormControlLabel value="" control={<Radio color="primary"/>} label="All"/>
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

const mapStateToProps    = state => {
    return {
        isLoggedIn: state.userAccountReducer.isLoggedIn,
        profile: state.loginReducer.profile
    }

};

const mapDispatchToProps = (dispatch) => ({

    updateSearchAccountType: (searchAccountType) => {
        dispatch({
            type: UPDATE_SEARCH_ACCOUNT_TYPE,
            payload: {
                searchAccountType: searchAccountType
            }

        })
    },

    updateSearchZip: (zip) => {

        dispatch({
            type: UPDATE_ZIP,
            payload: {
                searchZip: zip
            }

        })
    },

    updateSearchRole: (searchRole) => {
        dispatch({
            type: UPDATE_SEARCH_ROLE,
            payload: {
                searchRole: searchRole
            }

        })
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SearchBar));

