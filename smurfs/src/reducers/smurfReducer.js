import {
    FETCH_SMURF_START,
    FETCH_SMURF_SUCCESS,
    FETCH_SMURF_FAILURE,
    POST_SMURF,
    DELETE_SMURF
} from '../actions';

const initialState = {
    smurfs: [
        {
        name: '',
        age: null,
        height: ''
        }
    ],
    isFetching: false,
    error: ''
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURF_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload
            };
        case FETCH_SMURF_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        case POST_SMURF:
            return state;
        case DELETE_SMURF:
            return state;
        default:
            return state;
    }
};

export default reducer;