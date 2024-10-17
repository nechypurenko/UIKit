import { render, screen, fireEvent } from '@testing-library/react';
import { DatePicker } from './Datepicker';
import '@testing-library/jest-dom';

describe('DatePicker Component', () => {
  it('should render the current month and year', () => {
    const today = new Date();
    const month = today.toLocaleString('default', { month: 'long' });
    const year = today.getFullYear();

    render(<DatePicker selectedDate={null} onSelectDate={() => {}} />);
    expect(screen.getByText(`${month} ${year}`)).toBeInTheDocument();
  });

  it('should change to next month when next arrow is clicked', () => {
    render(<DatePicker selectedDate={null} onSelectDate={() => {}} />);
    
    const nextButton = screen.getByRole('button', { name: /next-month/i });
    fireEvent.click(nextButton);

    expect(screen.getByText(/October/i)).toBeInTheDocument();
  });

  it('should call onSelectDate with correct date when a date is clicked', () => {
    const handleSelectDate = vi.fn();
    render(<DatePicker selectedDate={null} onSelectDate={handleSelectDate} />);

    const day1 = screen.getByText('1');
    fireEvent.click(day1);

    expect(handleSelectDate).toHaveBeenCalledWith(expect.any(Date));
  });
});
