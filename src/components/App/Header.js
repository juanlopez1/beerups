import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
    AppBar, Button, Toolbar, Typography
} from '@material-ui/core';
import {LocalCafe} from '@material-ui/icons';

import {requestLogOut} from '../../actions/user';

const Header = ({details, onLogOut}) => (
    <header>
        <AppBar position="static">
            <Toolbar className="header-container">
                <Typography component="h1" variant="h4" className="header-title">
                    <LocalCafe fontSize="large" className="header-icon"/>
                    BeerUps
                </Typography>
                <Typography component="h4" variant="h6">
                    {`${details.name} (${details.username}) - ${details.role.name}`}
                </Typography>
                <Button color="inherit" onClick={onLogOut}>
                    Sign Out
                </Button>
            </Toolbar>
        </AppBar>
    </header>
);

Header.propTypes = {
    onLogOut: PropTypes.func.isRequired,
    details: PropTypes.shape({
        name: PropTypes.string,
        username: PropTypes.string,
        role: {
            name: PropTypes.string
        }
    }).isRequired
};

export default connect(
    state => ({
        details: state.user.details
    }),
    {onLogOut: requestLogOut}
)(Header);
