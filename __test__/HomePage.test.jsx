import { default as Home } from '@/pages';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('* Home page', () => {
  describe('- Rendering ..', () => {
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

    it('should have input with hello text', () => {
      render(<Home />);
      expect(screen.getByDisplayValue('hello')).toBeInTheDocument();
    });

    it('should not have Some Text in the document', () => {
      render(<Home />);
      expect(screen.queryByText(/Some Text/)).not.toBeInTheDocument();
    });
  });

  describe('- Behavior ..', () => {
    it('should click on Show Text button and show new text', async () => {
      render(<Home />);
      expect(screen.queryByText('Some Text')).not.toBeInTheDocument();
      const showButton = screen
        .getByRole('button', { name: 'Show Text' })
        .click();
      await userEvent.click(showButton);
      expect(
        await screen.findByText('Testing Text', {}, { timeout: 2000 })
      ).toBeInTheDocument();
      // expect(screen.getByText(/Testing Text/)).toBeInTheDocument();
    });
  });
});
