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

  openTxtFile(e) {
    
  }

  render() {
    return (
      <figure className="file"
              onClick={this.handleClick.bind(this)}
              onDoubleClick={this.openTxtFile.bind(this)} >
        <p><img src={FolderIcon} alt="" /></p>
        <figcaption>{this.state.name}</figcaption>
      </figure>
    )
  }
}
