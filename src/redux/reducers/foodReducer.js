import * as types from '../actions/actionTypes';

export default function (state={}, action) {
  switch (action.type) {
    case types.GET_ALL_FOOD_ITEMS:
      return {
        ...state, foodItems: action.food
      };

    case types.GET_USER_PENDING_ORDERS:
      return {
        ...state, userPendingOrders: action.food
      };

    case types.GET_USER_ORDER_HISTORY:
      return {
        ...state, userOrderHistory: action.food
      };
    
    default:
      return state;
  }
}