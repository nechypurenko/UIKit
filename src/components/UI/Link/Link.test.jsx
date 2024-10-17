import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Link } from './Link'; 


describe('Link Component', () => {

  it('renders link with correct href and children', () => {
    render(<Link href="https://example.com">Click me</Link>);

    const link = screen.getByRole('link', { name: /click me/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://example.com');
  });

  it('renders disabled link when state is disabled', () => {
    render(<Link href="https://example.com" state="disabled">Disabled link</Link>);

    const link = screen.getByText(/disabled link/i);
    expect(link).not.toHaveAttribute('href');
  });

  it('renders default link when state is default', () => {
    render(<Link href="https://example.com" state="default">Default link</Link>);

    const link = screen.getByRole('link', { name: /default link/i });

    expect(link).toHaveAttribute('href', 'https://example.com');
  });

  it('displays the correct children text', () => {
    render(<Link href="https://example.com">Link Text</Link>);

    const link = screen.getByRole('link', { name: /link text/i });

    expect(link).toBeInTheDocument();
    expect(link).toHaveTextContent('Link Text');
  });
});
