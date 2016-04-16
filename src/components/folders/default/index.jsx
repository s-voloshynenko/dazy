import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FolderIcon from '../../../assets/icons/folder_templates.png';
import FolderWindow from '../../window/folder';
require('../styles/index.css');

export default class DefaultFolder extends Component {

  selectFolder(e) {
    if (document.selection) {
      var range = document.body.createTextRange();
      range.moveToElementText(document.getElementById(e));
      range.select();
    } else if (window.getSelection) {
      var range = document.createRange();
      range.selectNode(document.getElementById(e));
      window.getSelection().addRange(range);
    }
  }

  openFolder () {
    const { openFolder, name } = this.props;
    openFolder(name);
  }

  render() {
    return (
      <figure id="folder1"
        className="folder"
        onClick={this.selectFolder.bind(this, 'folder1')}
        onDoubleClick={this.openFolder.bind(this)}>
          <p><img src={FolderIcon} alt="" /></p>
          <figcaption>{this.props.name}</figcaption>
      </figure>
    )
  }
}
