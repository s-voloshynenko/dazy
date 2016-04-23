import React, { Component } from 'react';
import FolderIcon from '../../../assets/icons/txt.png';

export default class DefaultFolder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name,
      click: this.props.click
    };
  }

  handleClick(e) {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    this.state.click(true);
  }

  render() {
    return (
      <figure onClick={this.handleClick.bind(this)} className="file">
        <p><img src={FolderIcon} alt="" /></p>
        <figcaption>{this.state.name}</figcaption>
      </figure>
    )
  }
}
