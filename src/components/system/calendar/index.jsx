import React, { Component } from 'react';
import { calculateMonth } from './utils';
require('./styles/index.css')

export default class Calendar extends Component {
  renderWeeks() {
    const month = calculateMonth(this.props.date);

    return (
      <tbody>
        <tr key={month.monthName}>
          {month.monthName}
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
        <thead>
          <tr>
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, i) => {
              return <td key={i}> {day} </td>;
            })}
          </tr>
        </thead>
        {this.renderWeeks()}
      </table>
    );
  }
}

Calendar.defaultProps = {
  date: new Date()
};
