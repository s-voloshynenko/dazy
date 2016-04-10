import React, { Component } from 'react';
import DesktopContextMenu from '../../components/contextmenu/desktop/index.jsx';
import DefaultFolder from '../../components/folders/default/index.jsx';
require('./styles/index.css');

export default class Desktop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posX: 0,
      posX: 0,
      isOpen: false
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

  render() {
    return (
      <div className="desktop" onContextMenu={this.openContextMenu.bind(this)}
        onClick={this.handleClick.bind(this)}>
        <DefaultFolder />
        { this.state.isOpen &&
          <DesktopContextMenu
            position={{ posX: this.state.posX, posY: this.state.posY }} />
        }
      </div>
    )
  }
}
