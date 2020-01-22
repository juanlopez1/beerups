import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        justifyContent: 'center'
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column'
    }
}));

export default useStyles;
