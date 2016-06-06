import React, { Component } from 'react';
import HideWindowButton from '../../buttons/window/hide';
import FullScreenButton from '../../buttons/window/fullscreen';
import CloseWindowButton from '../../buttons/window/close';
/** Routers */
import RouteIndex from './router/index.jsx';
import RouteDesktop from './router/desktop.jsx';
import Draggable from 'react-draggable';

export default class FolderWindow extends Component {
  constructor () {
    super();

    this.state = {
      historyBack: [],
      historyForward: [],
      childSelected: false,
      route: 'index'
    };
  }

  handleChildClick (type) {
    this.setState({
      childSelected: type
    });
  }

  disableChildClick (e) {
    this.setState({
      childSelected: false
    });
  }

  changeRoute (type) {
    this.setState({
      route: type
    })
  }

  render () {
    const { hoist, folder, close } = this.props;

    if (!folder.isOpen) return null;

    return (
      <Draggable handle=".window-bar-header"
                 bounds="#desktop">
      <div className="window-wrap"
           onClick={hoist.bind(this, folder.id)}
           style={{zIndex: folder.zIndex}}>
        <div id="test9" className="window" onClick={this.disableChildClick.bind(this)}>
          <div className="row">
            <div className="window-bar">
              <div className="window-bar-btns">
                <HideWindowButton />
                <FullScreenButton />
                <CloseWindowButton windowId={folder.id} close={close} />
              </div>
              <div className="window-bar-header">
                {folder.name}
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
                    <input type="button" className="window-menu-option" value="Home" onClick={this.changeRoute.bind(this, 'index')} />
                  </li>
                  <li>
                    <input type="button" className="window-menu-option" value="Desktop" onClick={this.changeRoute.bind(this, 'desktop')} />
                  </li>
                </ul>
              </div>
              <div className="pull-right col-md-9 window-container">
                {this.state.route === 'index' &&
                  <RouteIndex handlers={{
                      handleChildClick: this.handleChildClick.bind(this),
                      openFile: this.props.openFile,
                      changeRoute: this.changeRoute.bind(this)
                  }} />
                }

                {this.state.route === 'desktop' &&
                  <RouteDesktop handlers={{
                    changeRoute: this.changeRoute.bind(this)
                  }} />
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      </Draggable>
    )
  }
}
