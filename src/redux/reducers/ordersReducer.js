import * as types from '../actions/actionTypes'

export default function (state={}, action) {
    switch (action.type) {
        case types.GET_ALL_NEW_ORDERS:
            return {
                ...state, newOrders: action.orders
            }

        case types.GET_ALL_PENDING_ORDERS:
            return {
                ...state, allPendingOrders: action.orders
            }

        case types.GET_ALL_ARCHIVED_ORDERS:
            return {
                ...state, allArchivedOrders: action.orders
            }
    
        default:
            return state;
    }
}