import React, { Component } from 'react';
import DefaultFolder from '../../../folders/default';
import ChatExe from '../../../files/exe/index.jsx';
import TerminalExe from '../../../files/exe/terminal'

export default class RouteDesktop extends Component {
  render () {
    return (
      <div>
        <DefaultFolder id="desktop-notes"
                       name="Notes"
                       openFolder={function () {}} />
        <ChatExe onDoubleClick={function () {}} />
        <TerminalExe onDoubleClick={function () {}} />
      </div>
    );
 }
}
