import React, { Component } from 'react';

export default class SystemPreferencesBtn extends Component {
  render() {
    return (
      <li className="preferences-nav">
        <a href="#">
          <button className="preferences-btn" value="" />
        </a>
        <ul>
          <li><a href="#"> System info </a></li>
          <li><a href="#"> System preferences </a></li>
          <li><a href="#"> Switch off </a></li>
        </ul>
      </li>
    )
  }
}
