import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select
} from '@material-ui/core';
import {filter, map, sortBy} from 'lodash';

import countries from '../../../static/countries.json';
import cities from '../../../static/cities.json';
import useStyles from './styles';
import {setGeolocationCity} from '../../../actions/geolocation';
import {hideModal} from '../../../actions/modal';

const Location = ({onClose}) => {
    const styles = useStyles();
    const [selectedCountry, setCountry] = useState('');
    const [selectedCity, setCity] = useState('');
    const [filteredCities, setCities] = useState([]);
    const handleChangeCountry = value => {
        setCountry(value);
        setCities(sortBy(
            filter(cities, city => city.country === value), city => city.name
        ));
    };
    return (
        <div className={styles.paper}>
            <h2>
                Location
            </h2>
            <p>
                Please, select your country and city.
            </p>
            <FormControl className={styles.formControl}>
                <InputLabel>
                    Country
                </InputLabel>
                <Select value={selectedCountry} onChange={event => handleChangeCountry(event.target.value)}>
                    {map(countries, country => (
                        <MenuItem value={country.value}>
                            {country.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl className={styles.formControl} disabled={!selectedCountry}>
                <InputLabel>
                    City
                </InputLabel>
                <Select value={selectedCity} onChange={event => setCity(event.target.value)}>
                    {map(filteredCities, city => (
                        <MenuItem value={city.id}>
                            {city.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Button variant="contained" color="primary" onClick={() => onClose(selectedCity)}>
                Send
            </Button>
        </div>
    );
};

Location.propTypes = {
    onClose: PropTypes.func.isRequired
};

export default connect(
    null,
    dispatch => ({
        onClose: city => {
            dispatch(hideModal());
            dispatch(setGeolocationCity(city));
        }
    })
)(Location);
