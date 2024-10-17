import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Modal } from './Modal'; 


describe('Modal Component', () => {
    const mockOnClose = vi.fn();
  
    beforeEach(() => {
      mockOnClose.mockClear();
    });
  
    it('does not render the modal when isOpen is false', () => {
      render(
        <Modal title="Modal Title" isOpen={false} onClose={mockOnClose}>
          <p>Modal Content</p>
        </Modal>
      );
  
      const modalTitle = screen.queryByText('Modal Title');
      expect(modalTitle).toBeNull();
    });
  
    it('renders the modal when isOpen is true', () => {
      render(
        <Modal title="Modal Title" isOpen={true} onClose={mockOnClose}>
          <p>Modal Content</p>
        </Modal>
      );
  
      const modalTitle = screen.getByText('Modal Title');
      const modalContent = screen.getByText('Modal Content');
      expect(modalTitle).toBeInTheDocument();
      expect(modalContent).toBeInTheDocument();
    });
  
    it('calls onClose when the close button is clicked', () => {
      render(
        <Modal title="Modal Title" isOpen={true} onClose={mockOnClose}>
          <p>Modal Content</p>
        </Modal>
      );
  
      const closeButton = screen.getByRole('button');
      fireEvent.click(closeButton);
      expect(mockOnClose).toHaveBeenCalledTimes(1);
    });
  });