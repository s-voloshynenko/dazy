import React, { Component } from 'react';
import FolderIcon from '../../../assets/icons/folder-icon.png';
require('../styles/index.css');

export default class DefaultFolder extends Component {
  render() {
    return (
      <figure className="folder">
        <p><img src={FolderIcon} alt="" /></p>
        <figcaption>Notes</figcaption>
      </figure>
    )
  }
}
