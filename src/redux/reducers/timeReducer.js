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

const initialState = {
    activeTime: 0,
    activeSession: 'days',
    seconds: 0,
    minutes: 0,
    hours: 0,
    days: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case INCREASE_TIME:
            return {
                ...state,
                activeTime: state.activeTime += action.payload
            }
        case DECREASE_TIME:
            return {
                ...state,
                activeTime: state.activeTime -= action.payload
            }
        case SET_SESSION:
            return {
                ...state,
                activeSession: action.payload
            }
        case SET_SECONDS:
            return {
                ...state,
                seconds: action.payload
            }
        case SET_MINUTES:
            return {
                ...state,
                minutes: action.payload
            }
        case SET_HOURS:
            return {
                ...state,
                hours: action.payload
            }
        case SET_DAYS:
            return {
                ...state,
                days: action.payload
            }
        default:
            return state;
    }
}