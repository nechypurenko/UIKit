import React, { useState } from 'react';
import * as styled from './ColorPicker.styled';

export const ColorPicker = ({ colors, selectedColor, onSelectColor}) => {

  const handleColorSelect = (color) => {
    onSelectColor(color);
  };

  return (
    <styled.ColorPickerWrapper>
      <h4>Colour</h4>
      <styled.ColorGrid>
        {colors.map((color, index) => (
          <styled.ColorItem
            key={index}
            color={color}
            isSelected={selectedColor === color}
            onClick={() => handleColorSelect(color)}
            data-testid={`color-${color}`}
          >
            {selectedColor === color && <styled.SelectedColorOutline />}
          </styled.ColorItem>
        ))}
      </styled.ColorGrid>
    </styled.ColorPickerWrapper>
  );
};