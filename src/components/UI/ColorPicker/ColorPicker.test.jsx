import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import { ColorPicker } from './ColorPicker'

describe(" ColorPicker component", () => {
    const colors = ['#D32F2F', '#FF5722', '#4CAF50'];
    it("renders color options", ()=> {
        render(<ColorPicker colors={colors} onSelectColor={() => {}} />);
        colors.forEach((color => {
            expect(screen.getByTestId(`color-${color}`)).toBeInTheDocument()
        }))
    });

    it('selects a color when clicked', () => {
        const handleSelectColor = vi.fn();
        render(<ColorPicker colors={colors} onSelectColor={handleSelectColor} />);
        const colorOption = screen.getByTestId(`color-${colors[0]}`);
        fireEvent.click(colorOption);
        expect(handleSelectColor).toHaveBeenCalledWith(colors[0]);
      });
})