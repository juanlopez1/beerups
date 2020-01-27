import React from 'react';
import {
    AppBar, Button, Toolbar, Typography
} from '@material-ui/core';
import {LocalCafe} from '@material-ui/icons';

const Header = () => (
    <header>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className="header-title">
                    <LocalCafe className="header-icon"/>
                    BeerUps
                </Typography>
                <Button color="inherit">
                    Sign Out
                </Button>
            </Toolbar>
        </AppBar>
    </header>
);

export default Header;
