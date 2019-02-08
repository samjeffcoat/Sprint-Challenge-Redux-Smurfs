import axios from 'axios';
export const FETCHING_SMURF = "FETCHING_SMURF";
export const FETCHING_SMURF_SUCCESS = "FETCHING_SMURF_SUCCESS";
export const ADDING_SMURF = "ADDING_SMURF";
export const ADDING_SMURF_SUCCESS = "ADDING_SMURF_SUCCESS";


/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const getSmurfs = () => dispatch => {
  dispatch({type: FETCHING_SMURF});
  axios
  .get(
    'http://localhost:3333/smurfs/'
  )
  .then(res => dispatch({type: FETCHING_SMURF_SUCCESS, payload: res.data}))
  .catch(err => console.log(err));
}

export const addNewSmurf = (smurf) => dispatch => {
  dispatch({type: ADDING_SMURF});
  axios
  .post('http://localhost:3333/smurfs', smurf)
  .then(res => {
    dispatch({type: ADDING_SMURF_SUCCESS, payload: res.data});
  })
  .catch(err => console.log(err));
}
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
