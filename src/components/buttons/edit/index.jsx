import React, { Component } from 'react';

export default class EditBtn extends Component {
  render() {
    return (
      <li className="nav-btn">
        <a href="#">
          Edit
        </a>
        <ul>
          <li><a href="#"> Copy </a></li>
          <li><a href="#"> Cut </a></li>
          <li><a href="#"> Paste </a></li>
          <li><a href="#"> Undo </a></li>
        </ul>
      </li>
    )
  }
}
