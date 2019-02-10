import * as types from '../actions/actionTypes';


export default (state = {}, action) =>{
  switch (action.type) {
        
    case types.LOGIN:
      localStorage.setItem('user', action.data.token);
      localStorage.setItem('Admin', action.data.Admin);
      return state;

    case types.SIGNUP:
      return state;

        
    case types.ERROR_OCCURRED:
      localStorage.setItem('error', action.errMsg.error);
      return state;

    default:
      return state;
  }
};