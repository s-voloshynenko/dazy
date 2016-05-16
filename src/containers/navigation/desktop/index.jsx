import React, { Component } from 'react';
import FileBtn from '../../../components/buttons/file';
import EditBtn from '../../../components/buttons/edit';
import PreferencesBtn from '../../../components/buttons/preferences';
import SystemPreferencesBtn from '../../../components/system/preferences';
import Time from '../../../components/system/time';
import ChargeBtn from '../../../components/system/charge';

export default class DesktopNav extends Component {
  render() {
    return (
      <ul>
        <FileBtn />
        <EditBtn />
        <PreferencesBtn />
        <SystemPreferencesBtn />
        <Time />
        <ChargeBtn />
      </ul>
    );
  }
}
