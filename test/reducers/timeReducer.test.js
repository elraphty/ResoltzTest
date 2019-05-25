import {
    INCREASE_TIME,
    DECREASE_TIME,
    SET_SESSION,
    SET_SECONDS,
    SET_MINUTES,
    SET_HOURS,
    SET_DAYS
} from '../../src/redux/actions/types';

import timeReducer from '../../src/redux/reducers/timeReducer';

let state = {
    activeTime: 0,
    activeSession: 'days',
    seconds: 0,
    minutes: 0,
    hours: 0,
    days: 0
}

describe('Time Reducer', () => {

    // get the default state of redux
    test('has a default state', () => {
        expect(timeReducer(undefined, { type: undefined })).toEqual({
            activeTime: 0,
            activeSession: 'days',
            seconds: 0,
            minutes: 0,
            hours: 0,
            days: 0
        });
    });

    // set session to minutes i.e the default session will change from days to minutes
    test('changes session', () => {
        expect(timeReducer(undefined, { type: SET_SESSION, payload: 'minutes' }))
            .toEqual({
                activeTime: 0,
                activeSession: 'minutes',
                seconds: 0,
                minutes: 0,
                hours: 0,
                days: 0
            });
    });

    // increase time by 1000 i.e the default session will change from 0 to 1000
    test('changes active time to 1000', () => {
        expect(timeReducer(undefined, { type: INCREASE_TIME}))
            .toEqual({
                activeTime: 1000,
                activeSession: 'days',
                seconds: 0,
                minutes: 0,
                hours: 0,
                days: 0
            });
    });


     // decrease time by 1000 i.e the default session will change from 1000 to 0
     test('changes active time to -1000', () => {
        expect(timeReducer(undefined, { type: DECREASE_TIME}))
            .toEqual({
                activeTime: 0,
                activeSession: 'days',
                seconds: 0,
                minutes: 0,
                hours: 0,
                days: 0
            });
    });

});