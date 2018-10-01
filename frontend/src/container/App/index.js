import React, { Component, Fragment } from 'react';
import './style.css';
import { connect } from 'react-redux';
import { getList, removeMovie, addMovie} from '../../actions/list';

import ButtonAppBar from '../../components/Navbar';
import Banner from '../../components/Banner';
import List from '../../components/List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  componentDidMount() {
    this.props.getList();
  }

  render() {
    const { movies } = this.props
    if (!movies.error && Object.keys(movies.data).length > 0) {
      return (
        <div className="App">
          <ButtonAppBar />
          <Banner />
          <List list={movies.data.list} buttonName="Remove" category="My List" updateList={this.props.removeMovie}/>
          <List list={movies.data.recommendations} buttonName="Add" category="Recommendations" updateList={this.props.addMovie}/>
        </div>

      )
    } else {
      return null
    }

  }
}

const mapStateToProps = state => {
  return {
    movies: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getList: () => {
      dispatch(getList());
    },
    removeMovie: (id) => {
      dispatch(removeMovie(id));
    },
    addMovie: (id) => {
      dispatch(addMovie(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
