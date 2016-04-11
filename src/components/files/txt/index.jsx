import React, { Component } from 'react';
import FolderIcon from '../../../assets/icons/txt.png';
require('../styles/index.css');

export default class DefaultFolder extends Component {
  render() {
    return (
      <figure className="file">
        <p><img src={FolderIcon} alt="" /></p>
        <figcaption>txt</figcaption>
      </figure>
    )
  }
}
