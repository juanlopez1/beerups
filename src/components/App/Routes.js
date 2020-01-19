import React from 'react';
import {Route, Switch} from 'react-router';

import Home from '../Home';

const Routes = () => (
    <div className="routes">
        <Switch>
            <Route component={Home}/>
        </Switch>
    </div>
);

export default Routes;
