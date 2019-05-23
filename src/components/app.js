/**
*   Modified by Raphael Osaze Eyerin
*   on May 21 2019
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';

// REDUX ACTIONS
import { 
  setSession, 
  increaseTime, 
  decreaseTime, 
  setSeconds,
  setMinutes,
  setHours,
  setDays 
} from '../redux/actions';

class App extends Component {

  constructor(props) {
    super(props);
  }

  /** This function will trigger the redux action that will increase time */
  increaseTimeValue = () => {
    this.props.increaseTime();
    return this.getTime();
  }

  /** This function will trigger the redux action that will decrease time */
  decreaseTimeValue = () => {
    this.props.decreaseTime();
    return this.getTime();
  }

  /** This function will trigger set session redux action it will set the seesion with the parameter sent to the function, the default session is days */
  setTimeSession = (session) => () => {
    return this.props.setSession(session)
  }

  /** This funtion uses the redux time milliseconds and converts it to seconds, minutes hours and days  */
  getTime = () => {
    let reduxTime = this.props.time.activeTime;

    let reduxSeconds = this.props.time.seconds;
    let seconds = 0;

    if(reduxSeconds === 0) seconds = 1;
    else seconds = Math.floor((reduxTime % (1000 * 60)) / 1000);
    
    return this.props.setSeconds(seconds);
  }

  render() {
    return (
      <div>
        <p className="book-name">
          BOOK NAME
        </p>
        <h3 className="book-title">Understanding Redux - 1</h3>

        <h4 className="total-time">TOTAL TIME SPENT ON THE PROJECT</h4>
        <div className="timer-div">
          <div className="time-content">
            <p className="active-msg">ACTIVE SESSION: <span>{this.props.time.activeSession}</span></p>
            <div className="time-wrap">
              <span>
                <h1>{this.props.time.days}</h1>
                <p onClick={this.setTimeSession('days')}>Days</p>
              </span>
              <span className="time-divider">:</span>
              <span>
                <h1>{this.props.time.hours}</h1>
                <p onClick={this.setTimeSession('hours')}>Hours</p>
              </span>
              <span className="time-divider">:</span>
              <span>
                <h1>{this.props.time.minutes}</h1>
                <p onClick={this.setTimeSession('minutes')}>Minutes</p>
              </span>
              <span className="time-divider">:</span>
              <span>
                <h1>{this.props.time.seconds}</h1>
                <p onClick={this.setTimeSession('seconds')}>Seconds</p>
              </span>
            </div>
            <div className="time-actions">
              <h5 onClick={this.increaseTimeValue}>increase</h5>
              <h5 onClick={this.decreaseTimeValue}>decrease</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  time: state.time
});

export default connect(
  mapStateToProps, { 
    increaseTime, 
    decreaseTime, 
    setSession ,
    setSeconds,
    setMinutes,
    setHours,
    setDays
})(App);