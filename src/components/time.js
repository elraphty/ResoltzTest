
import React, { Component } from 'react';


class Time extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span>
                <h1>{this.props.timeValue}</h1>
                <p onClick={this.props.click}>{this.props.timeText}</p>
            </span>
        );
    }
}

export default Time;