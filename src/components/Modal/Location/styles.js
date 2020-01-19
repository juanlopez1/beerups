import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3)
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120
    }
}));

export default useStyles;
