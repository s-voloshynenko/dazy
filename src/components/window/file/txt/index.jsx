import React, { Component } from 'react';

export default class TxtWindow extends Component {
  constructor(props) {
    super(props);

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
