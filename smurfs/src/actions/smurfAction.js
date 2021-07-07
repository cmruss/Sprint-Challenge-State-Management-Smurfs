import axios from 'axios';

export const POST_SMURF = 'POST_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';
export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE';

export const getSmurfs = () => dispatch => {

    dispatch({ type: FETCH_SMURF_START });
    axios
        .get('http://localhost:3333/smurfs')
        .then(response => {
            console.log(response.data)
            dispatch({ type: FETCH_SMURF_SUCCESS, payload: response.data })
        })
        .catch(error => {
            dispatch({ type: FETCH_SMURF_FAILURE, payload: error.response })
        })
}

export const giveSmurf = (newSmurf) => dispatch => {
    dispatch({ type: POST_SMURF, payload: newSmurf });
    axios
        .post('http://localhost:3333/smurfs', newSmurf)
        .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.log(error);
          });
    dispatch({ type: FETCH_SMURF_START });
    axios
        .get('http://localhost:3333/smurfs')
        .then(response => {
            console.log(response.data)
            dispatch({ type: FETCH_SMURF_SUCCESS, payload: response.data })
        })
        .catch(error => {
            dispatch({ type: FETCH_SMURF_FAILURE, payload: error.response })
        })
}

export const deleteSmurf = (id) => dispatch => {
    dispatch({type: DELETE_SMURF, payload: id });
    axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
    dispatch({ type: FETCH_SMURF_START });
    axios
        .get('http://localhost:3333/smurfs')
        .then(response => {
            console.log(response.data)
            dispatch({ type: FETCH_SMURF_SUCCESS, payload: response.data })
        })
        .catch(error => {
            dispatch({ type: FETCH_SMURF_FAILURE, payload: error.response })
        })
};