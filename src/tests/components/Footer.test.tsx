import { render, fireEvent } from '@testing-library/react';
import Footer from '../../components/Footer';

describe('Footer', () => {
  it('renders correctly in dark mode', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Footer onClick={onClick} darkMode={true} />);

    expect(getByText(/Made with/i)).toBeInTheDocument();
    expect(getByText(/by John Allison/i)).toBeInTheDocument();
  });

  it('renders correctly in light mode', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Footer onClick={onClick} darkMode={false} />);

    expect(getByText(/Made with/i)).toBeInTheDocument();
    expect(getByText(/by John Allison/i)).toBeInTheDocument();
  });

  it('calls onClick when heart is clicked', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(<Footer onClick={onClick} darkMode={true} />);

    fireEvent.click(getByTestId('heart-icon'));
    expect(onClick).toHaveBeenCalled();
  });
});
