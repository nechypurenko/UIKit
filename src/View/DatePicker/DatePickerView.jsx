import React, { useState } from 'react';
import { DatePicker } from '../../components/UI/Datepicker'
export const DatePickerView = () => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today.getDate());

  const handleSelectDate = (date) => {
    setSelectedDate(date);
    console.log(`Selected date = ${date}`)
  }
    return (
        <div style={{ padding: '20px' }}>
          <h3>Date Picker</h3>
          <DatePicker selectedDate={selectedDate} onSelectDate={handleSelectDate}/>
        </div>
      );
}