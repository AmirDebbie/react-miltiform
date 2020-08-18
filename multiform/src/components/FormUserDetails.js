import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Button, TextField } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

function FormUserDetails(props) {

    const nextOne = e => {
        e.preventDefault();
        props.nextStep();
    }

    const { values, handleChange } = props;

    return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar position='static'>
                    <Toolbar>
                        <IconButton color='inherit' edge='start' aria-label='menu'>
                            <Menu />
                        </IconButton>
                        <Typography variant='h6'>
                            Enter User Details
                        </Typography>
                    </Toolbar>
                </AppBar>
                <TextField 
                label="First Name"
                placeholder="Enter Your First Name"
                onChange={handleChange('firstName')}
                defaultValue={values.firstName}
                />
                <br />
                <TextField 
                label="Last Name"
                placeholder="Enter Your Last Name"
                onChange={handleChange('lastName')}
                defaultValue={values.lastName}
                />
                <br />
                <TextField 
                label="Email"
                placeholder="Enter Your Email"
                onChange={handleChange('email')}
                defaultValue={values.email}
                />
                <br />
                <Button 
                variant="contained"
                color='primary'
                style={styles.button}
                onClick={nextOne}
                >Continue</Button>
            </React.Fragment>
        </MuiThemeProvider>
    )
}

const styles = {
    button: {
        margin: 15
    }
}


export default FormUserDetails;

