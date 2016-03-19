import React, { Component } from 'react';
import moment from 'moment';
import Calendar from '../calendar';
require('./styles/index.css')

export default class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment().format('h:mm a')
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.updateTime.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateTime() {
    this.setState({
      date: moment().format('h:mm a')
    });
  }

  render() {
    return (
      <li className="time">
        <a href="#">
          {this.state.date}
        </a>
        <ul>
          <li><a href="#"> {moment().format('dddd, MMMM Do YYYY')} </a></li>
          <li><Calendar /></li>
        </ul>
      </li>
    )
  }
}
