import * as actionTypes from './actionsTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type : actionTypes.AUTH_START
    };
};

export const authSuccess = (idToken, userId) => {
    return {
        type : actionTypes.AUTH_SUCCESS,
        idToken : idToken,
        userId : userId
    };
};

export const authFail = (error) => {
    return {
        type : actionTypes.AUTH_FAIL,
        error : error
        };
};

export const auth = (email, password, isSignUp) => {
    return dispatch =>{
        dispatch(authStart());
        const authData = {
            email : email,
            password : password,
            returnSecureToken : true
        };
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC2UhqVB_IJ0h6L5B8_UN9YKJ28ZewU19g';
        if(!isSignUp){
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC2UhqVB_IJ0h6L5B8_UN9YKJ28ZewU19g';
        }
        axios.post(url,authData)
        .then(response => {
            console.log(response);
            dispatch(authSuccess(response.data.idToken, response.data.localId))
        })
        .catch(error => {
            console.log(error);
            dispatch(authFail(error));
        });
    }
}