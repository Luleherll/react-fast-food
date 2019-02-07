import notify from 'msg-notify';
import 'msg-notify/dist/notify.css';
import * as types from '../actions/actionTypes'


export default (state = {}, action) =>{
    switch (action.type) {
        
        case types.LOGIN:
            localStorage.setItem('user', action.data.token)
            localStorage.setItem('Admin', action.data.Admin)
            return state
        
        case types.ERROR_OCCURRED:
            return {
                ...state,
                error: action.errMsg
            }
        default:
            return state;
    }
}