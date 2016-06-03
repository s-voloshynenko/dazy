import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FolderIcon from '../../../assets/icons/folder_templates.png';
import FolderWindow from '../../window/folder';

export default class DefaultFolder extends Component {
  constructor (props) {
    super(props);

    this.state = {
      id: this.props.id,
      name: this.props.name,
      openFolder: this.props.openFolder
    };
  }

  selectFolder (e) {
    // if (document.selection) {
    //   var range = document.body.createTextRange();
    //   range.moveToElementText(document.getElementById(e));
    //   range.select();
    // } else if (window.getSelection) {
    //   var range = document.createRange();
    //   range.selectNode(document.getElementById(e));
    //   window.getSelection().addRange(range);
    // }
  }

  openFolder () {
    const { openFolder, name } = this.state;
    openFolder(name);
  }

  render () {
    return (
      <figure id={this.state.id}
        className="folder"
        onClick={this.selectFolder.bind(this, 'folder1')}
        onDoubleClick={this.openFolder.bind(this)}>
          <p><img src={FolderIcon} alt="" /></p>
          <figcaption>{this.state.name}</figcaption>
      </figure>
    )
  }
}
