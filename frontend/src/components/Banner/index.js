import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import BackgroundImg from '../../utils/banner.png';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        backgroundImage: `url(${BackgroundImg})`,
        height: 680,
        
    },
});

function Banner(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <div className={classes.paper}></div>
                </Grid>
            </Grid>
        </div>
    );
}

Banner.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Banner);