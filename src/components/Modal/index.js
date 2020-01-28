import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
    Backdrop, Fade, Modal as ModalComponent
} from '@material-ui/core';

import {childrenPropTypes} from '../../util';

const Modal = ({Content, showing}) => (
    <ModalComponent
        open={showing}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{timeout: 500}}
        className="modal"
    >
        <Fade in={showing}>
            <Content/>
        </Fade>
    </ModalComponent>
);

Modal.propTypes = {
    showing: PropTypes.bool.isRequired,
    Content: childrenPropTypes
};

Modal.defaultProps = {
    Content: null
};

export default connect(
    state => ({
        Content: state.modal.Content,
        showing: state.modal.showing
    })
)(Modal);
