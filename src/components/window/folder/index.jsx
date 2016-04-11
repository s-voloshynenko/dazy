import React, { Component } from 'react';
import HideWindowButton from '../../buttons/window/hide';
import FullScreenButton from '../../buttons/window/fullscreen';
import CloseWindowButton from '../../buttons/window/close';
require('../styles/index.css');

export default class FolderWindow extends Component {
  render() {
    return (
      <div className="window" draggable="true">
        <div className="window-nav">
          <HideWindowButton />
          <FullScreenButton />
          <CloseWindowButton />
        </div>
      </div>
    )
  }
}
