import React, { Component } from 'react';
import { calculateMonth } from './utils';

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(this.props.date)
    };
  }

  changeMonth(date) {
    this.setState({
      date: new Date(this.state.date.setMonth(this.state.date.getMonth() + (date)))
    });
  }

  renderWeeks() {
    const month = calculateMonth(this.state.date);

    return (
      <tbody>
        <tr>
          <td colSpan="7">
            <button className="pull calendar-month-btn"
                   onClick={this.changeMonth.bind(this, -1)}>
              {'<'}
            </button>
            {month.monthName}
            <button className="pull calendar-month-btn"
                   ref={"3"}
                   onClick={this.changeMonth.bind(this, 1)}>
              {'>'}
            </button>
          </td>
        </tr>
        <tr key={month.monthName}>
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, i) => {
            return <td key={i} className="calendar-day-cell"> {day} </td>;
          })}
        </tr>
        {month.weeks.map((week, i) => {
          return (
            <tr key={i}>
              {this.renderDays(week)}
            </tr>
          );
        })}
      </tbody>
    );
  }

  renderDays(week) {
    return week.map((day, i) => {
      return (
        <td key={i} className={day.type === 1 ? 'currentDay' : ''}>
          {day.value}
        </td>
      );
    });
  }

  render() {
    return (
      <table className="calendar">
        {this.renderWeeks()}
      </table>
    );
  }
}

Calendar.defaultProps = {
  date: new Date()
};
