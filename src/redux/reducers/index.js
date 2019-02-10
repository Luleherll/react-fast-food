import { combineReducers } from 'redux';
import user from './loginReducer';
import food from './foodReducer';
import orders from './ordersReducer';

const rootReducer =(history) =>combineReducers({
    user, food, orders,
});

export default rootReducer;