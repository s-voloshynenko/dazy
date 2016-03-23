import React, { Component } from 'react';
import { calculateMonth } from './utils';
require('./styles/index.css')

export default class Calendar extends Component {
  changeMonth(date, e, s) {
    console.log(date, e, s.eventPhase)
    // this.setState({
    //   date: date
    // })
  }

  renderWeeks() {
    const month = calculateMonth(this.props.date);

    return (
      <tbody>
        <tr>
          <td colSpan="3">
            <input className="pull-right calendar-month-btn"
                   type="button"
                   value="<"
                   ref={"2"}
                   onClick={this.changeMonth} />
          </td>
          <td>
            {month.monthName}
          </td>
          <td colSpan="3">
            <input className="pull-left calendar-month-btn" type="button" value=">" />
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
