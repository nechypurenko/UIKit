import React, { useState } from 'react';
import { ColorPicker } from '../../components/UI/ColorPicker';

export const ColorPickerView = () => {
  const colors = [
    '#D32F2F', '#FF5722', '#FFEB3B', '#CDDC39', '#4CAF50',
    '#388E3C', '#03A9F4', '#3F51B5', '#9C27B0', '#673AB7',
  ];

  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorSelect = (color) => {
    setSelectedColor(color); 
    console.log(`Selected color: ${color}`); 
  }
  return (
    <div>
      <h3>Select Color</h3>
      <ColorPicker colors={colors} onSelectColor={handleColorSelect} selectedColor={selectedColor}/>
    </div>
  );
};