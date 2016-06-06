import React, { Component } from 'react';
import DefaultFolder from '../../../folders/default';
import ChatExe from '../../../files/exe/index.jsx';
import TerminalExe from '../../../files/exe/terminal';
import HTMLFile from '../../../files/html/index.jsx';

export default class RouteDesktop extends Component {
  render () {
    return (
      <div>
        <DefaultFolder id="desktop-notes"
                       name="Notes"
                       openFolder={this.props.handlers.changeRoute.bind(this, 'index')} />
        <ChatExe onDoubleClick={function () {}} />
        <TerminalExe onDoubleClick={function () {}} />
        <HTMLFile onDoubleClick={function () {}} />
      </div>
    );
 }
}
