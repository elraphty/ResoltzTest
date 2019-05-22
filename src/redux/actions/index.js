/**
 * Created by Raphael Osaze Eyerin
 * On May 22nd 2019
 */

import { 
    INCREASE_TIME, 
    DECREASE_TIME, 
    SET_SESSION, 
    SET_SECONDS, 
    SET_MINUTES, 
    SET_HOURS, 
    SET_DAYS 
} from '../actions/types';

export const increaseTime = () => dispatch => {
    dispatch({
        type: INCREASE_TIME
    });
}

export const decreaseTime = () => dispatch => {
    dispatch({
        type: DECREASE_TIME
    });
}

export const setSession = (session) => dispatch => {
    dispatch({
        type: SET_SESSION,
        payload: session
    });
}

export const setSeconds = (seconds) => dispatch => {
    dispatch({
        type: SET_SECONDS,
        payload: seconds
    });
}

export const setMinutes = (minutes) => dispatch => {
    dispatch({
        type: SET_MINUTES,
        payload: minutes
    });
}

export const setHours = (hours) => dispatch => {
    dispatch({
        type: SET_HOURS,
        payload: hours
    });
}

export const setDays = (days) => dispatch => {
    dispatch({
        type: SET_DAYS,
        payload: days
    });
}