import React, { Component } from 'react';
import FileBtn from './buttons/file';
import EditBtn from './buttons/edit';
import PreferencesBtn from './buttons/preferences';
require('./styles/index.css')

export default class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <ul>
          <FileBtn />
          <EditBtn />
          <PreferencesBtn />
        </ul>
      </div>
    )
  }
}
