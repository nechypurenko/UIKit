import React, { useState } from 'react';
import * as styled from './Datepicker.styled';
import { Week } from './DayCell'
import { Icon } from '../Icons/Icon'

export const DatePicker = ({ selectedDate, onSelectDate }) => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleDateClick = (date) => {
    const selectedFullDate = new Date(currentYear, currentMonth, date);
    onSelectDate(selectedFullDate);
  };

  

  return (
    <styled.DatePickerContainer>
      <styled.DatePickerHeader>
        <styled.ArrowButton onClick={handlePrevMonth} aria-label="prev-month">
          <Icon name="arrowLeft"/>
        </styled.ArrowButton>
        <styled.MonthYear>
          {monthNames[currentMonth]} {currentYear}
        </styled.MonthYear>
        <styled.ArrowButton onClick={handleNextMonth} aria-label="next-month">
          <Icon name="arrowRight"/>
        </styled.ArrowButton>
      </styled.DatePickerHeader>
      <styled.DaysOfWeekContainer>
            <styled.DaysOfWeek>S</styled.DaysOfWeek>
            <styled.DaysOfWeek>M</styled.DaysOfWeek>
            <styled.DaysOfWeek>T</styled.DaysOfWeek>
            <styled.DaysOfWeek>W</styled.DaysOfWeek>
            <styled.DaysOfWeek>T</styled.DaysOfWeek>
            <styled.DaysOfWeek>F</styled.DaysOfWeek>
            <styled.DaysOfWeek>S</styled.DaysOfWeek>
      </styled.DaysOfWeekContainer>
      <styled.DatesGrid>
        <Week 
          currentMonth={currentMonth}
          currentYear={currentYear}
          selectedDate={selectedDate}
          onDateClick={handleDateClick} />
      </styled.DatesGrid>
    </styled.DatePickerContainer>
  );
};