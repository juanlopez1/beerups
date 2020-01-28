import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router';

import Calendar from '../Calendar';
import Home from '../Home';
import MeetupEditor from '../MeetupEditor';
import {requestGetCoords} from '../../actions/geolocation';

const Routes = ({onMount}) => {
    useEffect(() => {
        onMount();
    }, [onMount]);

    return (
        <div className="routes">
            <Switch>
                <Route path="/meetup/:id?" component={MeetupEditor}/>
                <Route path="/calendar" component={Calendar}/>
                <Route path="/" component={Home}/>
            </Switch>
        </div>
    );
};

Routes.propTypes = {
    onMount: PropTypes.func.isRequired
};

export default connect(
    null,
    {onMount: requestGetCoords}
)(Routes);
