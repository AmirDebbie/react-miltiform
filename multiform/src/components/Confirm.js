import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Button, List, ListItem, ListItemText } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

function Confirm(props) {

    const nextOne = e => {
        e.preventDefault();
        props.nextStep();
    }

    const prevOne = e => {
        e.preventDefault();
        props.prevStep();
    }

    const { values: { firstName, lastName, email, occupation, city, bio }} = props;

    return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar position='static'>
                    <Toolbar>
                        <IconButton color='inherit' edge='start' aria-label='menu'>
                            <Menu />
                        </IconButton>
                        <Typography variant='h6'>
                            Confirm User Data
                        </Typography>
                    </Toolbar>
                </AppBar>
                    <List >
                        <ListItem style={{textAlign:'center'}}>
                            <ListItemText primary="First Name" secondary={firstName} />
                        </ListItem>
                        <ListItem style={{textAlign:'center'}}>
                            <ListItemText primary="Last Name" secondary={lastName} />
                        </ListItem>
                        <ListItem style={{textAlign:'center'}}>
                            <ListItemText primary="Bio" secondary={email} />
                        </ListItem>
                        <ListItem style={{textAlign:'center'}}>
                            <ListItemText primary="Occupation" secondary={occupation} />
                        </ListItem>
                        <ListItem style={{textAlign:'center'}}>
                            <ListItemText primary="city" secondary={city} />
                        </ListItem>
                        <ListItem style={{textAlign:'center'}}>
                            <ListItemText primary="Bio" secondary={bio} />
                        </ListItem>
                    </List>
                <Button 
                variant="contained"
                color='primary'
                style={styles.button}
                onClick={nextOne}
                >Confirm & Continue</Button>
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


export default Confirm;

