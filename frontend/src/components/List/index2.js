import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { GridList, GridListTile, GridListTileBar, IconButton, Button, Typography, Paper, Fade } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const styles = theme => ({
    main: {
        textAlign: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },

    title: {
        fontSize: '42px'
    },


    image: {
        height: '100px',
        width: '100px',
        fontSize: '25px',
        background: 'blue',
        margin: '10px',
        display: 'inline-block',
        lineHeight: '100px'
    },


    imageContainer: {
        verticalAlign: 'middle',
        display: 'inline-block',
        whiteSpace: 'nowrap',
        overflowX: 'auto',
        overflowY: 'hidden',
        width: '50%'
    },

    scrollButton: {
        paddingTop: '10px',
        paddingBottom: '10px',
        height: '100%',
        cursor: 'pointer',
        color: 'red',
        transition: ' 0.6s ease',
        '&:hover': {
            opacity: 0.6,
            transition: '.5s ease',
            color: "white",
            height: "100%",
            background: "rgba(0,0,0,0.8)"
        }
    }

    //   next {
    //     margin-left: 5px;
    //   }

    //   prev {
    //     margin-right: 5px;
    //   },









});

class List2 extends Component {
   
    constructor() {
        super()
        this.scroll = this.scroll.bind(this)
        this.myRef = React.createRef();
        // this.state = {scrollLeft: 0};
    }

    scroll(direction) {
        // let far = $('.image-container').width() / 2 * direction;
        // let pos = $('.image-container').scrollLeft() + far;
        // $('.image-container').animate({ scrollLeft: pos }, 1000)
        
        let far = this.myRef.current.offsetWidth / 2 * direction;
        console.log(`current far: ${far}`);
        let pos = this.myRef.current.body.scrollLeft + far;
        console.log(`current pos: ${pos}`);
        // this.setState({scrollLeft:})
        this.myRef.current.animate({ scrollLeft: pos }, 1000)
    }


    render() {
        const { classes, list, category, buttonName } = this.props;
        return (
            <div className={classes.main}>
                <h1 className={classes.title}>Scrolling Image Slider</h1>
                <div className={classes.wrapper}>
                    <a className={classes.scrollButton} onClick={this.scroll.bind(null, -1)}>&#10094;</a>
                    <div className={classes.imageContainer} ref={this.myRef}>
                        <div className={classes.image} >1</div>
                        <div className={classes.image} >2</div>
                        <div className={classes.image} >3</div>
                        <div className={classes.image} >4</div>
                        <div className={classes.image} >5</div>
                        <div className={classes.image} >6</div>
                        <div className={classes.image} >7</div>
                        <div className={classes.image} >8</div>
                        <div className={classes.image} >9</div>
                        <div className={classes.image} >10</div>
                    </div>
                    <a className={classes.scrollButton} onClick={this.scroll.bind(null, 1)}>&#10095;</a>
                </div>
            </div>
        )

    }


}

List2.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(List2);