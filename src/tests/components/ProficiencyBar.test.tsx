import { render, screen } from '@testing-library/react';
import ProficiencyBar from '../../components/ProficiencyBar';
import { ProficiencyBarProps } from '../../props/ProficiencyBarProps';

describe('ProficiencyBar', () => {
  const defaultProps: ProficiencyBarProps = {
    name: 'Test',
    percent: 0.5,
  };

  it('renders without crashing', () => {
    render(<ProficiencyBar props={defaultProps} />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('displays the correct proficiency name', () => {
    render(<ProficiencyBar props={defaultProps} />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('displays the correct proficiency percentage', () => {
    render(<ProficiencyBar props={defaultProps} />);
    const proficiencyBar = screen.getByTestId('proficiency-inner-bar');
    expect(proficiencyBar).toHaveStyle({ width: `${defaultProps.percent * 10}px` });
  });
});
