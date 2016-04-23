import React, { Component } from 'react';

export default class DesktopContextMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posX: this.props.position.posX,
      posY: this.props.position.posY
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      posX: nextProps.position.posX,
      posY: nextProps.position.posY
    });
  }

  createFolder(e) {
    console.log(this.state.posX);
  }

  render() {
    return (
      <ul className="context-menu"
        style={{ left: this.state.posX, top: this.state.posY - 20 }}>
        <li onClick={this.createFolder.bind(this)}><span> Create folder </span></li>
        <li><span> Create document </span></li>
        <li><span> Change desktop background </span></li>
      </ul>
    );
  }
}
