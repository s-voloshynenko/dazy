import React, { Component } from 'react';
import Navigation from '../navigation';
import Desktop from '../desktop';
import Loader from '../loader';

export default class OS extends Component {
  constructor () {
    super();
    this.state = {
      isLoaded: false
    };
  }

  init (state) {
    this.setState({
      isLoaded: state
    });
  }

  render() {
    return (
      <div className="os">
        { this.state.isLoaded &&
          <div>
            <Navigation />
            <Desktop />
          </div>
        }

        { !this.state.isLoaded &&
          <Loader init={this.init.bind(this)} />
        }
      </div>
    )
  }
}
