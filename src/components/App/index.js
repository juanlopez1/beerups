import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import NavPanel from './NavPanel';
import Header from './Header';
import Login from '../SignIn';
import Routes from './Routes';
import {requestGetSession} from '../../actions/user';

const App = ({logged, onMount}) => {
    useEffect(() => {
        onMount();
    }, [onMount]);

    return logged ? (
        <BrowserRouter>
            <Header/>
            <main>
                <NavPanel/>
                <Routes/>
            </main>
        </BrowserRouter>
    ) : (
        <Login/>
    );
};

App.propTypes = {
    onMount: PropTypes.func.isRequired,
    logged: PropTypes.bool
};

App.defaultProps = {
    logged: false
};

export default connect(
    state => ({
        logged: state.user.logged
    }),
    {onMount: requestGetSession}
)(App);
