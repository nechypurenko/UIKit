import React, { useState } from 'react';
import { SelectMenu } from '../../components/UI/SelectMenu';

export const SelectView = () => {
    const options = ['12:00 pm', '12:15 pm', '12:30 pm', '12:45 pm', '13:00 pm'];
    const defaultValue = options[1];
    const [selectedOption, setSelectedOption] = useState(defaultValue);

    const handleSelectOption = (option) => {
        setSelectedOption(option);
        console.log(`Selectd Option = ${option}`);
    }

    return (
        <>
            <h3>Select Menu</h3>
            <SelectMenu options={options} onSelectedOption={handleSelectOption} selectedOption={selectedOption}/>
        </>
    )
}