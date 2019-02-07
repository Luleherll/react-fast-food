import * as types from './actionTypes';

const getAllNewOrders = orders => ({type: types.GET_ALL_NEW_ORDERS, orders});
const getAllPendingOrders = orders =>({type: types.GET_ALL_PENDING_ORDERS, orders});
const getArchivedOrders = orders =>({type: types.GET_ALL_ARCHIVED_ORDERS, orders});

export {getAllNewOrders, getAllPendingOrders, getArchivedOrders};