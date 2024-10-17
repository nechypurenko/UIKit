import React, { useState }  from 'react';
import { Dropdown } from '../../components/UI/Dropdown';

export const DropdownView = () => {
  const options = ['Day', 'Week']; 
  const defaultValue = options[1];
  const [selectedOption, setSelectedOption] = useState(defaultValue);

    const handleSelectOption = (option) => {
        setSelectedOption(option);
        console.log(`Selectd Dropdown = ${option}`);
    }
  return (
    <div>
      <h3>Dropdown</h3>
      <Dropdown options={options} selectedOption={selectedOption} onSelectedOption={handleSelectOption}/>
    </div>
  );
};