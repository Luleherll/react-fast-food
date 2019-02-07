import { combineReducers } from 'redux';
import user from './loginReducer';

const rootReducer =(history) =>combineReducers({
    user
});

export default rootReducer;