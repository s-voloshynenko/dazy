import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FolderIcon from '../../../assets/icons/mini-storage.png';
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

  openFolder(e) {
    // remove selection
    window.getSelection().removeAllRanges();

    var windowRoot = document.createElement('div');
    windowRoot.setAttribute('id', 'folder-window');
    document.body.appendChild(windowRoot);
    ReactDOM.render(<FolderWindow name={this.state.name} />,
                      document.getElementById('folder-window'));
  }

  render() {
    return (
      <figure id="folder1"
        className="folder"
        onClick={this.selectFolder.bind(this, 'folder1')}
        onDoubleClick={this.openFolder.bind(this)}>
          <p><img src={FolderIcon} alt="" /></p>
          <figcaption>{this.state.name}</figcaption>
      </figure>
    )
  }
}
