import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import NavPanel from './NavPanel';
import Header from './Header';
import Routes from './Routes';
import {requestGetCoords} from '../../actions/geolocation';

const App = ({onMount}) => {
    useEffect(() => {
        onMount();
    }, [onMount]);
    return (
        <BrowserRouter>
            <Header/>
            <main>
                <NavPanel/>
                <Routes/>
            </main>
        </BrowserRouter>
    );
};

App.propTypes = {
    onMount: PropTypes.func.isRequired
};

export default connect(
    null,
    {onMount: requestGetCoords}
)(App);
