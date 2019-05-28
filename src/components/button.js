
import React, { Component } from 'react';


class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h5 onClick={this.props.click}>{this.props.text}</h5>
        );
    }
}

export default Button;