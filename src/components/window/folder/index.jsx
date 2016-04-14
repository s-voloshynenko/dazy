import React, { Component } from 'react';
import File from '../../files/txt';
import HideWindowButton from '../../buttons/window/hide';
import FullScreenButton from '../../buttons/window/fullscreen';
import CloseWindowButton from '../../buttons/window/close';
import Draggable from 'react-draggable';
require('../styles/index.css');

export default class FolderWindow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name,
      historyBack: [],
      historyForward: [],
      childSelected: false
    };
  }

  handleChildClick(type) {
    this.setState({
      childSelected: type
    });
  }

  disableChildClick(e) {
    e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
    this.setState({
      childSelected: false
    });
  }

  render() {
    return (
      <Draggable handle=".window-bar-header" bounds="#desktop">
        <div id="test9" className="window" onClick={this.disableChildClick.bind(this)}>
          <div className="row">
            <div className="window-bar">
              <div className="window-bar-btns">
                <HideWindowButton />
                <FullScreenButton />
                <CloseWindowButton windowId="test9" />
              </div>
              <div className="window-bar-header">
                {this.state.name}
              </div>
            </div>
            <div className="window-nav">
              <ul>
                <li>
                  <input type="button" disabled={!this.state.historyBack.length} className="window-nav-back" />
                </li>
                <li>
                  <input type="button" disabled={!this.state.historyForward.length} className="window-nav-forward" />
                </li>
                <li>
                  <input type="button" className="window-nav-file-new" />
                </li>
                <li>
                  <input type="button" disabled={!this.state.childSelected} className="window-nav-file-print" />
                </li>
                <li>
                  <input type="button" disabled={!this.state.childSelected} className="window-nav-file-delete" />
                </li>
              </ul>
             </div>
            <div className="window-content">
              <div className="pull-left col-md-3 right-divider window-menu">
                <ul>
                  <li>
                    <input type="button" className="window-menu-option" value="Home" />
                  </li>
                  <li>
                    <input type="button" className="window-menu-option" value="Desktop" />
                  </li>
                </ul>
              </div>
              <div className="pull-right col-md-9">
                <File name="help.txt" click={this.handleChildClick.bind(this)} />
                <File name="Nodejs.txt" click={this.handleChildClick.bind(this)} />
              </div>
            </div>
          </div>
        </div>
      </Draggable>
    )
  }
}
