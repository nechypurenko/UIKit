import React from 'react';
import * as styled from './DayCell.styled';

export const Week = ({ currentMonth, currentYear, selectedDate, onDateClick }) => {
  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const isSameDay = (day, month, year, selectedDate) => {
    return (
      selectedDate instanceof Date &&
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === month &&
      selectedDate.getFullYear() === year
    );
  };

  const renderWeeks = () => {
    const weeks = [];
    let days = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<styled.DayCell key={`empty-${i}`} />);
    }

    for (let d = 1; d <= daysInMonth(currentMonth, currentYear); d++) {
      const isSelected = isSameDay(d, currentMonth, currentYear, selectedDate);
      days.push(
        <styled.DayCell
          key={d}
          isSelected={isSelected}
          onClick={() => onDateClick(d)}
        >
          {d}
        </styled.DayCell>
      );

      if (days.length === 7) {
        weeks.push(<styled.WeekRow key={`row-${weeks.length}`}>{days}</styled.WeekRow>);
        days = [];
      }
    }

    if (days.length > 0) {
      while (days.length < 7) {
        days.push(<styled.DayCell key={`empty-${days.length + firstDayOfMonth}`} />);
      }
      weeks.push(<styled.WeekRow key={`row-${weeks.length}`}>{days}</styled.WeekRow>);
    }

    return weeks;
  };

  return <>{renderWeeks()}</>;
};
