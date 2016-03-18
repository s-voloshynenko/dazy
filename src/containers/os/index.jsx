import React, { Component } from 'react';
import Navigation from '../../components/navigation';
require('./styles/index.css');

export default class OS extends Component {
  render() {
    return (
      <div className="os">
        <Navigation />
      </div>
    )
  }
}
