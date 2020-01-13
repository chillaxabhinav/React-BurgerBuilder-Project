import * as actionTypes from './actionsTypes';
import axios from '../../axios-orders';

export const purchaseBurgerSuccess = (id, orderData) =>{
    return {
        type : actionTypes.PURCHASE_BURGER_SUCCESS,
        orderID : id,
        orderData : orderData
    }
};

export const purchaseBurgerFail = (error) => {
    return {
        type : actionTypes.PURCHASE_BURGER_FAIL,
        error : error
    }
};

export const purchaseBurgerStart = () => {
    return {
        type :actionTypes.PURCHASE_BURGER_START,

    }
}

export const puchaseBurger = (orderData) => {
    return (dispatch) =>{
        dispatch(purchaseBurgerStart());
        axios.post('/orders.json', orderData)
            .then(response => {
                dispatch(purchaseBurgerSuccess(response.data.name,orderData));
            })
            .catch(error => {
                dispatch(purchaseBurgerFail(error));
            });
    }
}


export const purchaseInit = () => {
    return {
        type : actionTypes.PURCHASE_INIT
    }
}


export const fetchOrderSuccess = (orders) => {
    return { 
        type : actionTypes.FETCH_ORDER_SUCCESS,
        orders : orders
    }
}

export const fetchOrderFail = (error) => {
    return {
        type : actionTypes.FETCH_ORDER_FAIL,
        error : error
    }
}

export const fetchOrderStart = () =>{
    return {
        type : actionTypes.FETCH_ORDER_START
    }
}

export const fetchOrders = () => {
    return dispatch => {
        dispatch(fetchOrderStart());
        axios.get('/orders.json')
            .then(response => {
                const fetchedOrders = [];
                console.log(response.data);
                for (let key in response.data) {
                    fetchedOrders.push({
                        ...response.data[key],
                        id: key
                    });
                }
                dispatch(fetchOrderSuccess(fetchedOrders));
            })
            .catch(error => {
                dispatch(fetchOrderFail(error))
            });
    }
}