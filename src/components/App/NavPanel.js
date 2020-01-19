import React from 'react';
import {
    ListItem, ListItemIcon, ListItemText
} from '@material-ui/core';
import {
    Dashboard, ShoppingCart, People, BarChart, Layers
} from '@material-ui/icons';

const NavPanel = () => (
    <div className="nav-panel">
        <ListItem button>
            <ListItemIcon>
                <Dashboard/>
            </ListItemIcon>
            <ListItemText primary="Dashboard"/>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <ShoppingCart/>
            </ListItemIcon>
            <ListItemText primary="Orders"/>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <People/>
            </ListItemIcon>
            <ListItemText primary="Customers"/>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <BarChart/>
            </ListItemIcon>
            <ListItemText primary="Reports"/>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <Layers/>
            </ListItemIcon>
            <ListItemText primary="Integrations"/>
        </ListItem>
    </div>
);

export default NavPanel;
