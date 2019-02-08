/*
  Be sure to import in all of the action types from `../actions`
*/
import {FETCHING_SMURF, FETCHING_SMURF_SUCCESS, ADDING_SMURF, ADDING_SMURF_SUCCESS} from '../actions';
const initialState= {
  smurfs: [],
  fetchingSmurfs: false,
   isAdding: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null

}
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
function  reducer  (state= initialState, action) {
  switch(action.type) {
    case FETCHING_SMURF:
    return {
      ...state, 
      error: ' ',
      fetchingSmurfs: true
  };
  case FETCHING_SMURF_SUCCESS:
  return {
    ...state,
    fetchingSmurfs: false,
    smurfs: action.payload,
    error: ' '
}
case ADDING_SMURF:
return{
  ...state,
  isAdding: true,
  error: ' '
};
case ADDING_SMURF_SUCCESS:
return {
  ...state,
  smurfs: action.payload,
  isAdding: false,
  error: ' '
}
default:
return state;
  }
}
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
export default reducer;