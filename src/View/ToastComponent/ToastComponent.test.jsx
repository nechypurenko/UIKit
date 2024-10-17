import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ToastComponent } from './ToastComponent'; 

describe('Toast Component', () => {

  it('shows and hides the toast after 3 seconds', async () => {
    render(<ToastComponent />);

    const showToastButton = screen.getByText('Show Toast');
    fireEvent.click(showToastButton);

    const toastMessage = screen.getByText('Event deleted');
    expect(toastMessage).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText('Event deleted')).toBeNull();
    }, { timeout: 5000 });
  });

  it('closes the toast when the close button is clicked', () => {
    render(<ToastComponent />);

    const showToastButton = screen.getByText('Show Toast');
    fireEvent.click(showToastButton);

    const toastMessage = screen.getByText('Event deleted');
    expect(toastMessage).toBeInTheDocument();

    const closeButton = screen.getByRole('button', {name: "close"});
    fireEvent.click(closeButton);

    expect(screen.queryByText('Event deleted')).toBeNull();
  });
});
