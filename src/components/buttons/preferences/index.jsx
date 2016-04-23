import React, { Component } from 'react';

export default class PreferencesBtn extends Component {
  render() {
    return (
      <li className="nav-btn">
        <a href="#">
          Preferences
        </a>
        <ul>
          <li><a href="#"> Settings </a></li>
          <li><a href="#"> View </a></li>
        </ul>
      </li>
    )
  }
}
