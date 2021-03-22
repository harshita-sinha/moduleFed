import React, { useState } from 'react';
import {Box, AppBar, Toolbar, IconButton, Typography, Button} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const Header = ({ text = 'Default' }) => {
    const [isClicked, setIsClicked] = useState(false);
    const classes = useStyles();

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Button color="inherit" onClick={() => setIsClicked(true)}>Home</Button>
                <Button color="inherit" onClick={() => setIsClicked(true)}>About</Button>
                <Button color="inherit" onClick={() => setIsClicked(true)}>Contact us</Button>
                <Button color="inherit">Login</Button>

                </Toolbar>
            </AppBar>
            {isClicked && ( <Box textAlign="centre" pt={3} pl={3}><Typography>Main content: {text}</Typography></Box>)}

        </div>
    );
};
export default Header;
