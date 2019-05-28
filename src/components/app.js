/**
*   Modified by Raphael Osaze Eyerin
*   on May 21 2019
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';

// REDUX ACTIONS
import {
  setSession,
  changeTime,
  setSeconds,
  setMinutes,
  setHours,
  setDays
} from '../redux/actions';

// components
import Button from './button';
import Time from './time';
import TimeDivider from './timeDivider';

class App extends Component {

  constructor(props) {
    super(props);
  }

  /** This function will trigger the redux action that will increase or decrease the value of time */
  changeTimeValue = (time, type) => () => {

    if (type === 'increase') {
      this.props.changeTime(time, 'increase');
      return this.getTime();
    } else if (type === 'decrease') {
      // redux state time
      let reduxTime = this.props.time.activeTime;

      // if redux time is lesser or equals to zero do nthing to avoid negative time
      if (reduxTime <= 0) return

      this.props.changeTime(time, 'decrease');
      return this.getTime();
    }

  }


  /** This function will trigger set session redux action it will set the seesion with the parameter sent to the function, the default session is days */
  setTimeSession = (session) => () => {
    return this.props.setSession(session)
  }

  /** This funtion uses the redux time milliseconds and converts it to seconds, minutes hours and days  */
  getTime = () => {
    let reduxTime = this.props.time.activeTime;
    // let reduxSeconds = this.props.time.seconds;

    let seconds = 0;
    let minutes = 0;
    let hours = 0;
    let days = 0;


    seconds = Math.floor((reduxTime % (1000 * 60)) / 1000);

    minutes = Math.floor((reduxTime % (1000 * 60 * 60)) / (1000 * 60));

    hours = Math.floor((reduxTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    days = Math.floor(reduxTime / (1000 * 60 * 60 * 24));

    // set redux state with new values
    this.props.setSeconds(seconds);
    this.props.setMinutes(minutes);
    this.props.setHours(hours);
    this.props.setDays(days);

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
              <Time timeValue={this.props.time.days} timeText={'Days'} click={this.setTimeSession('days')} />
              <TimeDivider />
              <Time timeValue={this.props.time.hours} timeText={'Hours'} click={this.setTimeSession('hours')} />
              <TimeDivider />
              <Time timeValue={this.props.time.minutes} timeText={'Minutes'} click={this.setTimeSession('minutes')} />
              <TimeDivider />
              <Time timeValue={this.props.time.seconds} timeText={'Seconds'} click={this.setTimeSession('seconds')} />
            </div>
            <div className="time-actions">
              <Button click={this.changeTimeValue(1000, 'increase')} text="increase"></Button>
              <Button click={this.changeTimeValue(1000, 'decrease')} text="decrease"></Button>
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
    changeTime,
    setSession,
    setSeconds,
    setMinutes,
    setHours,
    setDays
  })(App);