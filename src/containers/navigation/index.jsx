import React, { Component } from 'react';
import DesktopNav from './desktop';
import FileNav from './file';

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: this.props.type
    };
  }

  render() {
    return (
      <div className="navigation">
        {this.state.type === 'desktop' &&
          <DesktopNav />
        }
        {this.state.type === 'file' &&
          <FileNav />
        }
      </div>
    )
  }
}
