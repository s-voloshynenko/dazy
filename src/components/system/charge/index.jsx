import React, { Component } from 'react';

export default class ChargetBtn extends Component {
  render() {
    return (
      <li className="charge-nav">
        <a href="#">
          <button className="charge-btn" value="" />
        </a>
        <ul>
          <li><a href="#"> Charge preferences </a></li>
        </ul>
      </li>
    )
  }
}
