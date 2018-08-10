import React, {Component} from 'react';
import TextField from "@material-ui/core/es/TextField/TextField";
import withMobileDialog from "@material-ui/core/es/withMobileDialog/withMobileDialog";
import Button from "@material-ui/core/es/Button/Button";
import GoogleSignIn from "../../components/GoogleSignIn";


class Login extends Component {


      styles = {
          container :
              {
                    display:'flex',
                    flexDirection: 'column',
                    padding : '10',
                    justifyContent: 'center',
                    alignItems:'center',
                    height: '60vh',
                  // backgroundColor: 'green'
              }
    }


    render() {
        return (


            <div style={this.styles.container}>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email or username"
                    type="email"

                />

                <TextField
                    margin="dense"
                    id="name"
                    label="password"
                    type="password"
                />

                <Button>
                    Login
                </Button>

                <GoogleSignIn>
                    Google login
                </GoogleSignIn>

            </div>


        );
    }
}

export default withMobileDialog()(Login);
