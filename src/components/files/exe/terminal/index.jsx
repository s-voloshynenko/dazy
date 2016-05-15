import React, { Component } from 'react';
import TerminalIcon from '../../../../assets/icons/kvt.png';

export default class TerminalExe extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   name: this.props.name
    // };
  }

  handleDoubleClick() {
    const { onDoubleClick } = this.props;
    onDoubleClick();
  }

  render() {
    return (
      <figure className="exe" onDoubleClick={this.handleDoubleClick.bind(this)}>
        <p><img src={TerminalIcon} alt="" /></p>
        <figcaption>Terminal</figcaption>
      </figure>
    )
  }
}
