import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { GridList, GridListTile, Button, Typography, Fade } from '@material-ui/core';

const styles = theme => ({
    title: {
        color: "white",
        paddingLeft: "31%",
        marginTop: theme.spacing.unit * 5
    },
    gallery: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        padding: theme.spacing.unit * 2,
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
        width: "40%"
    },
    content: {
        display: 'flex',
        flexDirection: 'column'
    },
    gridImg: {
        '&:hover': {
            opacity: 0.6,
            transition: '.5s ease',
        }
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    button: {
        marginBottom: theme.spacing.unit * 3,
    }
});

class List extends Component {
    state = {
        isHovered: []
    }

    mouseOn = (i) => {
        console.log(`isHovered: ${this.state.isHovered}`);
        let isHover = [...this.state.isHovered];
        isHover[i] = true;
        this.setState({ isHovered: isHover });
    }

    handleClick = (id) => {
        console.log('unhovering on this img');
        if (this.state.isHovered[id]) {
            this.props.updateList(id);
            let isHover = [...this.state.isHovered];
            isHover[id] = false;
            this.setState({ isHovered: isHover });
        }
    }

    render() {
        const { classes, list, category, buttonName } = this.props;
        return (
            <div>
                <Typography variant="display1" className={classes.title}>{category} </Typography>
                <div className={classes.gallery}>

                    <GridList cellHeight={'auto'} className={classes.gridList} cols={3}>
                        {list.map(movie => (
                            <GridListTile key={movie.id}>
                                <div className={classes.content}>
                                    <img src={movie.img} alt={movie.title} className={classes.gridImg} onMouseOver={() => this.mouseOn(movie.id)} />
                                    <Typography variant="subheading" style={{ color: "white", padding: "5px" }}>{movie.title} </Typography>
                                    <Fade in={this.state.isHovered[movie.id]}>
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            className={classes.button}
                                            onClick={() => this.handleClick(movie.id)}
                                        >
                                            {buttonName}
                                        </Button>
                                    </Fade>

                                </div>

                            </GridListTile>
                        ))}
                    </GridList>

                </div>
            </div>
        )
    }
}

List.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(List);