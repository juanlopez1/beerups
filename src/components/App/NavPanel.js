import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {
    ListItem, ListItemIcon, ListItemText
} from '@material-ui/core';
import {
    Home, CalendarToday
} from '@material-ui/icons';

const NavPanel = ({history}) => (
    <div className="nav-panel">
        <ListItem button onClick={() => history.push('/')}>
            <ListItemIcon>
                <Home/>
            </ListItemIcon>
            <ListItemText primary="Home"/>
        </ListItem>
        <ListItem button onClick={() => history.push('/calendar')}>
            <ListItemIcon>
                <CalendarToday/>
            </ListItemIcon>
            <ListItemText primary="Calendar"/>
        </ListItem>
    </div>
);

NavPanel.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func
    }).isRequired
};

export default withRouter(NavPanel);
