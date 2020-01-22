import React from 'react';
import {Route, Switch} from 'react-router';

import Calendar from '../Calendar';
import Home from '../Home';

const Routes = () => (
    <div className="routes">
        <Switch>
            <Route path="/calendar" component={Calendar}/>
            <Route path="/" component={Home}/>
        </Switch>
    </div>
);

export default Routes;
