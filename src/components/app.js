/**
*   Modified by Raphael Osaze Eyerin
*   on May 21 2019
*/

import React, { Component } from 'react';

export default class App extends Component {
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
            <p className="active-msg">ACTIVE SESSION: <span>MINUTES</span></p>
            <div className="time-wrap">
              <span>
                <h1>11</h1>
                <p>Days</p>
              </span>
              <span className="time-divider">:</span>
              <span>
                <h1>31</h1>
                <p>Hours</p>
              </span>
              <span className="time-divider">:</span>
              <span>
                <h1>27</h1>
                <p>Minutes</p>
              </span>
              <span className="time-divider">:</span>
              <span>
                <h1>11</h1>
                <p>Seconds</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
