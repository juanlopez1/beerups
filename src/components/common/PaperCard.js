import React from 'react';
import {Paper} from '@material-ui/core';

import {childrenPropTypes} from '../../util';

const PaperCard = ({children}) => (
    <Paper className="paper">
        {children}
    </Paper>
);

PaperCard.propTypes = {
    children: childrenPropTypes.isRequired
};

export default PaperCard;
