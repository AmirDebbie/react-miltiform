import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

function Success(props) {

    return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar position='static'>
                    <Toolbar>
                        <IconButton color='inherit' edge='start' aria-label='menu'>
                            <Menu />
                        </IconButton>
                        <Typography variant='h6'>
                            Success
                        </Typography>
                    </Toolbar>
                </AppBar>
                <h1>Thank You For Your Submission!</h1>
                <p>Email will be sent to you for account confirmation.</p>
            </React.Fragment>
        </MuiThemeProvider>
    )
}

export default Success;

