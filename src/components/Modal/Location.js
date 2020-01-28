import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
    Button, FormControl, InputLabel, MenuItem, Select
} from '@material-ui/core';
import {filter, map, sortBy} from 'lodash';

import countries from '../../static/countries.json';
import cities from '../../static/cities.json';
import {setGeolocationCity} from '../../actions/geolocation';
import {hideModal} from '../../actions/modal';

const Location = ({onSubmit}) => {
    const [selectedCountry, setCountry] = useState('');
    const [selectedCity, setCity] = useState('');
    const [filteredCities, setCities] = useState([]);
    const handleChangeCountry = ({target: {value}}) => {
        setCountry(value);
        setCities(sortBy(
            filter(cities, city => city.country === value), city => city.name
        ));
    };
    return (
        <div className="location-paper">
            <h2>Location</h2>
            <p>Please, select your country and city.</p>
            <FormControl className="form-control">
                <InputLabel>
                    Country
                </InputLabel>
                <Select value={selectedCountry} onChange={handleChangeCountry}>
                    {map(countries, country => (
                        <MenuItem key={country.value} value={country.value}>
                            {country.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl className="form-control" disabled={!selectedCountry}>
                <InputLabel>
                    City
                </InputLabel>
                <Select value={selectedCity} onChange={event => setCity(event.target.value)}>
                    {map(filteredCities, city => (
                        <MenuItem key={city.id} value={city.id}>
                            {city.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Button
                variant="contained"
                color="primary"
                onClick={() => onSubmit(selectedCity)}
                disabled={!selectedCountry || !selectedCity}
            >
                Send
            </Button>
        </div>
    );
};

Location.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default connect(
    null,
    dispatch => ({
        onSubmit: city => {
            dispatch(hideModal());
            dispatch(setGeolocationCity(city));
        }
    })
)(Location);
