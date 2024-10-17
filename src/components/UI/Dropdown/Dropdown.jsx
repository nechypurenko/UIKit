import React, { useState } from 'react';
import * as styled from './Dropdown.styled';

export const Dropdown = ({ options, selectedOption, onSelectedOption }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setIsOpen(false);
    onSelectedOption(option);
  };

  return (
    <styled.DropdownWrapper>
      <styled.DropdownButton onClick={toggleDropdown} isOpen={isOpen}>
        {selectedOption}
        <styled.ArrowIcon isOpen={isOpen} />
      </styled.DropdownButton>

      {isOpen && (
        <styled.DropdownList>
          {options.map((option, index) => (
            <styled.DropdownItem
              key={index}
              onClick={() => handleSelect(option)}
              isSelected={selectedOption === option}
              value={option}
            >
              {option}
            </styled.DropdownItem>
          ))}
        </styled.DropdownList>
      )}
    </styled.DropdownWrapper>
  );
};