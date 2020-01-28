import PropTypes from 'prop-types';

const userPropTypes = PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    username: PropTypes.string
});

export default userPropTypes;
