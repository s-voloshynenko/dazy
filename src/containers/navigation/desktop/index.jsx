import React, { Component } from 'react';
import FileBtn from '../../../components/buttons/file';
import EditBtn from '../../../components/buttons/edit';
import PreferencesBtn from '../../../components/buttons/preferences';
import Time from '../../../components/system/time';


export default class DesktopNav extends Component {
  render() {
    return (
      <ul>
        <FileBtn />
        <EditBtn />
        <PreferencesBtn />
        <Time />
      </ul>
    );
  }
}
