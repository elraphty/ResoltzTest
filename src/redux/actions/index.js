/**
 * Created by Raphael Osaze Eyerin
 * On May 22nd 2019
 */

import { INCREASE_TIME, DECREASE_TIME, SET_SESSION } from '../actions/types';

export const increaseTime = () => dispatch => {
    dispatch ({
        type: INCREASE_TIME
    });
}

export const decreaseTime = () => dispatch => {
    dispatch ({
        type: DECREASE_TIME
    });
}

export const setSession = (session) => dispatch => {
    dispatch ({
        type: SET_SESSION,
        payload: session
    });
}