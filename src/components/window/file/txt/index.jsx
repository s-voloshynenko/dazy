import React, { Component } from 'react';

export default class TxtWindow extends Component {
  constructor() {
    super();

    this.state = {
      data: this.props.data
    };
  }

  render() {
    return (
      <div>
        {this.state.data}
      </div>
    )
  }
}
