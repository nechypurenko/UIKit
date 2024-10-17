import React, { useState } from 'react';
import * as styled from './SelectMenu.styled';



export const SelectMenu = ({ options, onSelectedOption, selectedOption}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setIsOpen(false);
    onSelectedOption(option);
  };

  return (
    <styled.SelectWrapper>
      <styled.SelectDisplay onClick={toggleDropdown}>
        <span>{selectedOption}</span>
        <styled.ArrowIcon isOpen={isOpen} />
      </styled.SelectDisplay>
      {isOpen && (
        <styled.SelectDropdown>
          {options.map((option, index) => (
            <styled.OptionItem
              key={index}
              onClick={() => handleSelect(option)}
              isSelected={selectedOption === option}
            >
              {option}
            </styled.OptionItem>
          ))}
        </styled.SelectDropdown>
      )}
    </styled.SelectWrapper>
  );
};
