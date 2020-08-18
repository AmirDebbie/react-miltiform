import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Button, TextField } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

function FormPersonalDetails(props) {

    const nextOne = e => {
        e.preventDefault();
        props.nextStep();
    }

    const prevOne = e => {
        e.preventDefault();
        props.prevStep();
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
                            Enter Personal Details
                        </Typography>
                    </Toolbar>
                </AppBar>
                <TextField 
                label="Occupation"
                placeholder="Enter Your Occupation"
                onChange={handleChange('occupation')}
                defaultValue={values.occupation}
                />
                <br />
                <TextField 
                label="City"
                placeholder="Enter Your City"
                onChange={handleChange('city')}
                defaultValue={values.city}
                />
                <br />
                <TextField 
                label="Bio"
                placeholder="Enter Your Bio"
                onChange={handleChange('bio')}
                defaultValue={values.bio}
                />
                <br />
                <Button 
                variant="contained"
                color='primary'
                style={styles.button}
                onClick={nextOne}
                >Continue</Button>
                <Button 
                variant="contained"
                style={styles.button}
                onClick={prevOne}
                >Back</Button>
            </React.Fragment>
        </MuiThemeProvider>
    )
}

const styles = {
    button: {
        margin: 15
    }
}


export default FormPersonalDetails;

