import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
    Button, CssBaseline, TextField, Typography, Container, CircularProgress
} from '@material-ui/core';
import {LocalCafe} from '@material-ui/icons';
import {handleChangeSignIn, requestLogin} from '../../actions/user';

const SignIn = ({
    fetching, loginError, password, onChange, onSubmit, username
}) => {
    const handleChange = ({target: {name, value}}) => onChange({[name]: value});
    return (
        <Container component="main" maxWidth="sm">
            <CssBaseline/>
            <div className="login-paper">
                <Typography component="h1" variant="h4" className="brand">
                    <LocalCafe className="icon" fontSize="large"/>
                    BeerUps
                </Typography>
                <Typography component="h3" variant="h4">
                    Sign in
                </Typography>
                <div className="content">
                    {fetching ? (
                        <CircularProgress/>
                    ) : (
                        <Fragment>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                autoFocus
                                onChange={handleChange}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={handleChange}
                            />
                            {loginError && (
                                <Typography color="error">
                                    Verify your credentials.
                                </Typography>
                            )}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit-button"
                                onClick={onSubmit}
                                disabled={!password || !username}
                            >
                                Sign In
                            </Button>
                        </Fragment>
                    )}
                </div>
            </div>
        </Container>
    );
};

SignIn.propTypes = {
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    loginError: PropTypes.bool,
    fetching: PropTypes.bool,
    password: PropTypes.string,
    username: PropTypes.string
};

SignIn.defaultProps = {
    loginError: false,
    fetching: false,
    password: null,
    username: null
};

export default connect(
    state => ({
        loginError: state.user.loginError,
        fetching: state.user.fetching,
        username: state.user.username,
        password: state.user.password
    }),
    {
        onChange: handleChangeSignIn,
        onSubmit: requestLogin
    }
)(SignIn);
