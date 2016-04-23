import React, { Component } from 'react';
var loaderContent = require('raw!../../assets/templates/loader.txt');
var acceptebleColors = ['red', 'white', 'green', 'blue', 'pink', 'yellow', 'purple', 'grey'];

export default class Loader extends Component {
  onInitEnd () {
    const { init } = this.props;

    init(true);
  }

  startInitializing () {
    var _self = this;
    var captionLength = 0;
    var caption = '';
    var captionEl = document.getElementById('dazy-input');
    type();

    function type () {
      captionEl.innerHTML = loaderContent.substr(0, captionLength++);
      captionEl.style.color = acceptebleColors[Math.floor(Math.random() * (6 - 1 + 1)) + 1];
      if (captionLength <= loaderContent.length) {
        setTimeout(type, 2);
      } else {
        captionLength = 0;
        loaderContent = '';
        captionEl.style.color = acceptebleColors[1];

        setTimeout(function () {
          _self.onInitEnd();
        }, 2000);
      }
    }
  }

  componentDidMount() {
    this.startInitializing();
  }

  render() {
    return (
      <div className="loader">
        <span id="dazy-input">
        </span>
        <span className="blinking-cursor">
          █
        </span>
      </div>
    )
  }
}
