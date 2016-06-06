import React, { Component } from 'react';
import HTMLIcon from '../../../assets/icons/html.png';

export default class HTMLFile extends Component {
  constructor(props) {
    super(props);
  }

  handleDoubleClick() {
    const { onDoubleClick } = this.props;
    onDoubleClick();
  }

  render() {
    return (
      <figure className="file" onDoubleClick={this.handleDoubleClick.bind(this)}>
        <p><img src={HTMLIcon} alt="" /></p>
        <figcaption>GitHub</figcaption>
      </figure>
    )
  }
}
