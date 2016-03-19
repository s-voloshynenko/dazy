import React, { Component } from 'react';
import FileBtn from '../../components/buttons/file';
import EditBtn from '../../components/buttons/edit';
import PreferencesBtn from '../../components/buttons/preferences';
import Time from '../../components/system/time';
require('./styles/index.css')

export default class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <ul>
          <FileBtn />
          <EditBtn />
          <PreferencesBtn />
          <Time />
        </ul>
      </div>
    )
  }
}
