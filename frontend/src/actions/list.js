import axios from 'axios';

function requestStart() {
    return {
        type: 'REQUEST_LIST_START'
    };
}

function requestSuccess(response) {
    return {
        type: 'REQUEST_LIST_SUCCESS',
        data: response
    };
}

function requestFail(error) {
    return {
        type: 'REQUEST_LIST_FAIL',
        error
    }
}

export function getList() {
    console.log('fetching movie list ...')
    return (dispatch, store) => {
        dispatch(requestStart());
        axios
        .get('/api/movies')
        .then(res => {
            dispatch(requestSuccess(res.data));
        })
        .catch(err => {
            dispatch(requestFail(err));
        })
    }
}

export function addMovie(id) {
    console.log('adding movie into movie list ...')
    return (dispatch, store) => {
        dispatch(requestStart());
        axios
        .put(`/api/movie/${id}`)
        .then(res => {
            dispatch(requestSuccess(res.data));
        })
        .catch(err => {
            dispatch(requestFail(err));
        })
    }
}

export function removeMovie(id) {
    console.log('removing movie from movie list ...')
    return (dispatch, store) => {
        dispatch(requestStart());
        axios
        .delete(`/api/movie/${id}`)
        .then(res => {
            dispatch(requestSuccess(res.data));
        })
        .catch(err => {
            dispatch(requestFail(err));
        })
    }
}