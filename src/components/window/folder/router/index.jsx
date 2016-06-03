import React, { Component } from 'react';
import File from '../../../files/txt';
import DefaultFolder from '../../../folders/default';
var nodejsLogo = require('raw!../../../../assets/content/nodejs.txt');


export default class RouteIndex extends Component {
  render () {
    return (
      <div>
        <File file={{ name: "help.txt", type: "txt", data: 'test' }}
              click={this.props.handlers.ChildClick}
              open={this.props.handlers.openFile} />
        <File file={{ name: "Nodejs.txt", type: "txt", data: nodejsLogo }}
              click={this.props.handlers.handleChildClick}
              open={this.props.handlers.openFile} />
        <DefaultFolder id="notes-nodejs"
                       name="Nodejs"
                       openFolder={this.props.handlers.changeRoute} />
      </div>
    );
 }
}
