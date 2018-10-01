const list = (state = {isLoading: false, error: null, data: {}}, action) => {
    switch(action.type) {
        case 'REQUEST_LIST_START':
            return {
                ...state,
                isLoading: true
            }
        case 'REQUEST_LIST_SUCCESS':
            return {
                ...state,
                isLoading: false,
                data: action.data
            }
        case 'REQUEST_LIST_FAIL':
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        default:
            return state;
    }
};

export default list;