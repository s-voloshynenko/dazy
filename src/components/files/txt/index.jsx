import React, { Component } from 'react';
import FolderIcon from '../../../assets/icons/txt.png';
require('../styles/index.css');

export default class DefaultFolder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name
    };
  }

  render() {
    return (
      <figure className="file">
        <p><img src={FolderIcon} alt="" /></p>
        <figcaption>{this.state.name}</figcaption>
      </figure>
    )
  }
}
