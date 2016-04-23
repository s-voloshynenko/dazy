import React, { Component } from 'react';

export default class FileBtn extends Component {
  render() {
    return (
      <li className="nav-btn">
        <a href="#">
          File
        </a>
        <ul>
          <li><a href="#"> New file </a></li>
          <li><a href="#"> Open file </a></li>
          <li><a href="#"> Save </a></li>
          <li><a href="#"> Save as.. </a></li>
        </ul>
      </li>
    )
  }
}
