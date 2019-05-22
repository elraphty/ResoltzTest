/**
 * Created by Raphael Osaze Eyerin
 * On May 22nd 2019
 */

import { INCREASE_TIME, DECREASE_TIME, SET_SESSION } from '../actions/types';

const initialState = {
    activeTime: 0,
    activeSession: 'days'
}

export default (state = initialState, action) => {
    switch (action.type) {
        case INCREASE_TIME:
            return {
                ...state,
                activeTime: state.activeTime + 1000
            }
        case DECREASE_TIME:
            return {
                ...state,
                activeTime: state.activeTime - 1000
            }
        case SET_SESSION:
            return {
                ...state,
                activeSession: action.payload
            }
        default:
            return state;
    }
}