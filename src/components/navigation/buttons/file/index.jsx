import React, { Component } from 'react';

export default class FileBtn extends Component {
  render() {
    return (
      <ul>
        <ul>
          <li>
            File
            <ul>
              <li> New file </li>
              <li> Open file </li>
              <li> Save </li>
              <li> Save as.. </li>
            </ul>
          </li>
        </ul>
      </ul>
    )
  }
}