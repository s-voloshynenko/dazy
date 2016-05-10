import React, { Component } from 'react';
import FolderIcon from '../../../assets/icons/txt.png';

export default class DefaultFile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      file: this.props.file,
      click: this.props.click,
      open: this.props.open
    };
  }

  handleClick(e) {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    this.state.click(true);
  }

  openTxtFile(e) {
    const { file, open } = this.state;
    open(file.name, file.type, file.data);
  }

  render() {
    return (
      <figure className="file"
              onClick={this.handleClick.bind(this)}
              onDoubleClick={this.openTxtFile.bind(this)} >
        <p><img src={FolderIcon} alt="" /></p>
        <figcaption>{this.state.file.name}</figcaption>
      </figure>
    )
  }
}
