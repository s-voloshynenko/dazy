import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FolderIcon from '../../../assets/icons/folder_templates.png';
import FolderWindow from '../../window/folder';
require('../styles/index.css');

export default class DefaultFolder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name
    };
  }

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

  render() {
    const { openFolder } = this.props;

    return (
      <figure id="folder1"
        className="folder"
        onClick={this.selectFolder.bind(this, 'folder1')}
        onDoubleClick={openFolder}>
          <p><img src={FolderIcon} alt="" /></p>
          <figcaption>{this.state.name}</figcaption>
      </figure>
    )
  }
}
