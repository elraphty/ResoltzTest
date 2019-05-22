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
    return this.props.increaseTime();
  }

  /** This function will trigger the redux action that will decrease time */
  decreaseTimeValue = () => {
    return this.props.decreaseTime();
  }

  /** This function will trigger set session redux action it will set the seesion with the parameter sent to the function, the default session is days */
  setTimeSession = (session) => () => {
    return this.props.setSession(session)
  }

  getTime(){
    let time = this.props.time.activeTime;
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
                <h1>11</h1>
                <p onClick={this.setTimeSession('days')}>Days</p>
              </span>
              <span className="time-divider">:</span>
              <span>
                <h1>31</h1>
                <p onClick={this.setTimeSession('hours')}>Hours</p>
              </span>
              <span className="time-divider">:</span>
              <span>
                <h1>27</h1>
                <p onClick={this.setTimeSession('minutes')}>Minutes</p>
              </span>
              <span className="time-divider">:</span>
              <span>
                <h1>{this.getTime}</h1>
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