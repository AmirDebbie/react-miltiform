import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Button, TextField } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

function FormUserDetails(props) {

    const nextOne = e => {
        e.preventDefault();
        props.nextStep();
    }

    const { values } = props;

    return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar position='static'>
                    <Toolbar>
                        <IconButton color='inherit' edge='start' aria-label='menu'>
                            <Menu />
                        </IconButton>
                        <Typography variant='h6'>
                            Menu
                        </Typography>
                    </Toolbar>
                </AppBar>
                <TextField />
            </React.Fragment>
        </MuiThemeProvider>
    )
}


export default FormUserDetails;

