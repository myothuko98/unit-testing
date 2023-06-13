import { default as Home } from '@/pages';
import { render, screen } from '@testing-library/react';

describe('Home page - Rendering', () => {
  it('should have Home Page text', () => {
    render(<Home />);
    expect(screen.getByText('Home Page')).toBeInTheDocument();
  });

  it('should have button with text Click Me', () => {
    render(<Home />);
    expect(
      screen.getByRole('button', { name: 'Click Me' })
    ).toBeInTheDocument();
  });

  it('should have input with label enter Random Text', () => {
    render(<Home />);
    expect(screen.getByLabelText(/Enter Random Text/)).toBeInTheDocument();
  });

  it('should have input with label Enter Specific Text', () => {
    render(<Home />);
    expect(screen.getByLabelText(/Specific/)).toBeInTheDocument();
  });
});
