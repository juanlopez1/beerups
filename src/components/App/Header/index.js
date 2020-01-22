import React from 'react';
import {
    AppBar, Button, Toolbar, Typography
} from '@material-ui/core';
import {LocalCafe} from '@material-ui/icons';

import useStyles from './styles';

const Header = () => {
    const styles = useStyles();
    return (
        <header>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={styles.title}>
                        <LocalCafe className={styles.titleIcon}/>
                        BeerUps
                    </Typography>
                    <Button color="inherit">
                        Sign Out
                    </Button>
                </Toolbar>
            </AppBar>
        </header>
    );
};

export default Header;
