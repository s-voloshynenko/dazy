import React, { Component } from 'react';
import DesktopContextMenu from '../../components/contextmenu/desktop/index.jsx';
import ChatExe from '../../components/files/exe/index.jsx';
import DefaultFolder from '../../components/folders/default/index.jsx';
import FolderWindow from '../../components/window/folder';
import FileWindow from '../../components/window/file';
import ErrorWindow from '../../components/window/error/index.jsx';

export default class Desktop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posX: 0,
      posX: 0,
      isOpen: false,
      folderWindows: [],
      fileWindows: [],
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

  openFileWindow (name, type, data) {
    const id = Math.floor(+new Date() + Math.random()).toString(36);
    const newFileWindow = {
      id,
      name,
      type,
      data: 'test data',
      isOpen: true
    };
    const fileWindows = this.state.fileWindows.concat([newFileWindow]);
    this.setState({
      fileWindows
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

  closeErrorWindow (id) {
    const errorWindows = this.state.errorWindows.map((errorWindow) => {
      if (errorWindow.id === id) {
        errorWindow.isOpen = false;
      }

      return errorWindow;
    });

    this.setState({
      errorWindows
    });
  }

  closeFileWindow (id) {
    const fileWindows = this.state.fileWindows.map((fileWindow) => {
      if (fileWindow.id === id) {
        fileWindow.isOpen = false;
      }

      return fileWindow;
    });

    this.setState({
      fileWindows
    });
  }

  handleChatDoubleClick() {
    this.setState({
      errorWindows: [{ id: 'error-1', title: 'System error', message: 'Sorry, do something useful. It doesn`t implemented yet..', isOpen: true }]
    })
  }

  render() {
    return (
      <div id="desktop" onContextMenu={this.openContextMenu.bind(this)}
        onClick={this.handleClick.bind(this)}>
        <DefaultFolder name="Notes"
                       openFolder={this.openFolderWindow.bind(this)}
                       openFile={this.openFileWindow.bind(this)} />
        <ChatExe onDoubleClick={this.handleChatDoubleClick.bind(this)} />

        { this.state.folderWindows.map(folder => <FolderWindow key={folder.id} folder={folder} close={this.closeFolderWindow.bind(this)} />) }

        { this.state.fileWindows.map(fileWindow => <FileWindow key={fileWindow.id} fileWindow={fileWindow} close={this.closeFileWindow.bind(this)} />) }

        { this.state.errorWindows.map(errorWindow => <ErrorWindow key={errorWindow.id} errorWindow={errorWindow} close={this.closeErrorWindow.bind(this)} />) }

        { this.state.isOpen &&
          <DesktopContextMenu
            position={{ posX: this.state.posX, posY: this.state.posY }} />
        }
      </div>
    )
  }
}
