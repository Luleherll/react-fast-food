import * as types from './actionTypes';

const login = data =>({type: types.LOGIN, data})
const signUp = data => ({type: types.SIGNUP, data })
const errorOccurred = errMsg =>({type: types.ERROR_OCCURRED, errMsg})
const status = errMsg =>({type: types.USER_STATUS, errMsg})
const getMenu = food =>({type: types.GET_ALL_FOOD_ITEMS, food})
const pendingOrders = food => ({type: types.GET_USER_PENDING_ORDERS, food})
const orderHistory = food => ({type: types.GET_USER_ORDER_HISTORY, food})

export {login, signUp, errorOccurred, status, getMenu, pendingOrders, orderHistory}