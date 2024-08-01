import { render, screen } from '@testing-library/react';
import Spinner from '@/components/ui/spinner';
import '@testing-library/jest-dom'; // for the custom matchers

describe('Spinner Component', () => {
  test('renders the default spinner', () => {
    render(<Spinner />);
    const spinner = screen.getByRole('loader');
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveClass('w-6 h-6 text-gray-1000');
  });

  test('renders with the correct tag', () => {
    render(<Spinner tag="span" />);
    const spinner = screen.getByRole('loader');
    expect(spinner.tagName).toBe('SPAN');
  });

  test('renders with the correct size', () => {
    render(<Spinner size="lg" />);
    const spinner = screen.getByRole('loader');
    expect(spinner).toHaveClass('w-8 h-8');
  });

  test('renders with the correct color', () => {
    render(<Spinner color="primary" />);
    const spinner = screen.getByRole('loader');
    expect(spinner).toHaveClass('text-primary');
  })
})