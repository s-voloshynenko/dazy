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
      <div dangerouslySetInnerHTML={{__html: this.state.data}}>

      </div>
    )
  }
}
