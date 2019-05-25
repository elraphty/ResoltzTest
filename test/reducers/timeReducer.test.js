import {
    INCREASE_TIME,
    DECREASE_TIME,
    SET_SESSION,
    SET_SECONDS,
    SET_MINUTES,
    SET_HOURS,
    SET_DAYS
} from '../../src/redux/reducers/timeReducer';

import timeReducer from '../../src/redux/reducers/timeReducer';

console.log(timeReducer);

describe('Request Reducer', () => {

    it('has a default state', () => {
        expect(timeReducer(undefined, {type: INCREASE_TIME})) === {
            activeTime: 1000,
            activeSession: 'days',
            seconds: 0,
            minutes: 0,
            hours: 0,
            days: 0
        }
    });

});