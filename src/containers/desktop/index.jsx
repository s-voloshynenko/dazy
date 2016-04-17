import React, { Component } from 'react';
import DesktopContextMenu from '../../components/contextmenu/desktop/index.jsx';
import ChatExe from '../../components/files/exe/index.jsx';
import DefaultFolder from '../../components/folders/default/index.jsx';
import FolderWindow from '../../components/window/folder';
import ErrorWindow from '../../components/window/error/index.jsx';
require('./styles/index.css');

export default class Desktop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posX: 0,
      posX: 0,
      isOpen: false,
      folderWindows: [],
      errorWindows: []
    };
  }

  openContextMenu(e) {
    e.preventDefault();

    let posx = 0;
    let posy = 0;

    if (!e) var e = window.event;

    if (e.pageX || e.pageY) {
      posx = e.pageX;
      posy = e.pageY;
    } else if (e.clientX || e.clientY) {
      posx = e.clientX + document.body.scrollLeft +
                         document.documentElement.scrollLeft;
      posy = e.clientY + document.body.scrollTop +
                         document.documentElement.scrollTop;
    }

    if (posy <= 20) return this.setState({ isOpen: false });

    this.setState({
      posX: posx,
      posY: posy,
      isOpen: true
    });
  }

  handleClick(e) {
    this.setState({
      isOpen: false
    });
  }

  openFolderWindow (name) {
    const id = Math.floor(+new Date() + Math.random()).toString(36);
    const newFolderWindow = {
      id,
      name,
      isOpen: true
    };
    const folderWindows = this.state.folderWindows.concat([newFolderWindow]);
    this.setState({
      folderWindows
    });
  }

  closeFolderWindow (id) {
    const folderWindows = this.state.folderWindows.map(folder => {
      if (folder.id === id) {
        folder.isOpen = false;
      }
      return folder;
    });
    this.setState({
      folderWindows
    });
  }

  handleChatDoubleClick() {
    this.setState({
      errorWindows: [{ id: 'test', message: 'Sorry!' }]
    })
  }

  render() {
    return (
      <div id="desktop" onContextMenu={this.openContextMenu.bind(this)}
        onClick={this.handleClick.bind(this)}>
        <DefaultFolder name="Notes" openFolder={this.openFolderWindow.bind(this)} />
        <ChatExe onDoubleClick={this.handleChatDoubleClick.bind(this)} />

        { this.state.folderWindows.map(folder => <FolderWindow key={folder.id} folder={folder} close={this.closeFolderWindow.bind(this)} />) }

        { this.state.errorWindows.map(errorWindow => <ErrorWindow key={errorWindow.id} message={errorWindow.message} />) }

        { this.state.isOpen &&
          <DesktopContextMenu
            position={{ posX: this.state.posX, posY: this.state.posY }} />
        }
      </div>
    )
  }
}
