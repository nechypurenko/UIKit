import { render, screen, fireEvent } from '@testing-library/react';
import { Dropdown } from './Dropdown'; 

describe('Dropdown Component', () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];
  let handleSelect;

  beforeEach(() => {
    handleSelect = vi.fn();
  });

  it('renders correctly with the selected option', () => {
    render(<Dropdown options={options} selectedOption="Option 1" onSelectedOption={handleSelect} />);

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Option 1');
  });

  it('opens the dropdown list when clicked', () => {
    render(<Dropdown options={options} selectedOption="Option 1" onSelectedOption={handleSelect} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
  });

  it('closes the dropdown list after selecting an option', () => {
    render(<Dropdown options={options} selectedOption="Option 1" onSelectedOption={handleSelect} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    const option2 = screen.getByText('Option 2');
    expect(screen.queryByRole('list')).toBeInTheDocument();

    fireEvent.click(option2);
    expect(screen.queryByRole('list')).not.toBeInTheDocument();

    expect(handleSelect).toHaveBeenCalledWith('Option 2');
  });

  it('highlights the selected option in the dropdown', async () => {
    render(<Dropdown options={options} selectedOption="Option 2" onSelectedOption={handleSelect} />);

    const button =  screen.getByRole('button');
    await fireEvent.click(button);

    const optionsList = screen.getAllByText('Option 2');
    // screen.debug(optionsList);
    const option2 = optionsList.find((option) => option.tagName.toLowerCase() === 'li');
    expect(option2).toBeInTheDocument();
    // screen.debug(option2);
    expect(option2).toHaveStyle('background-color: #e8e8e8');
  });
});
