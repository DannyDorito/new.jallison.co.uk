import { render, screen } from '@testing-library/react';
import BoxWithIcon from '../../components/BoxWithIcon';
import { BoxWithIconProps } from '../../props/BoxWithIconProps';

describe('BoxWithIcon', () => {
  const defaultProps: BoxWithIconProps = {
    className: 'test-class',
    text: 'Test text',
    svg: () => <svg />,
    link: undefined
  };

  it('renders without crashing', () => {
    render(<BoxWithIcon props={defaultProps} />);
    expect(screen.getByText('Test text')).toBeInTheDocument();
  });

  it('renders with a link when provided', () => {
    const props: BoxWithIconProps = {
      ...defaultProps,
      link: 'https://example.com',
    };
    render(<BoxWithIcon props={props} />);
    const linkElement = screen.getByText('Test text').closest('a');
    expect(linkElement).toHaveAttribute('href', 'https://example.com');
  });

  it('renders without a link when not provided', () => {
    render(<BoxWithIcon props={defaultProps} />);
    const linkElement = screen.getByText('Test text').closest('a');
    expect(linkElement).toBeNull();
  });
});
