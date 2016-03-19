import React, { Component } from 'react';
import Navigation from '../../components/navigation';
require('./styles/index.css');

export default class OS extends Component {
  openContextMenu(e) {
    console.log(e);
  }

  render() {
    return (
      <div className="os" onContextMenu={this.openContextMenu}>
        <Navigation />
      </div>
    )
  }
}
