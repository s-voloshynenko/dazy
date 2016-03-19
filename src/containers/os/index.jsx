import React, { Component } from 'react';
import Navigation from '../navigation';
import Desktop from '../desktop';
require('./styles/index.css');

export default class OS extends Component {
  render() {
    return (
      <div className="os">
        <Navigation />
        <Desktop />
      </div>
    )
  }
}
