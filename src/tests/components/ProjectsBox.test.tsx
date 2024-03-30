import { render, screen } from '@testing-library/react';
import ProjectsBox from '../../components/ProjectsBox';
import { ProjectsBoxProps } from '../../props/ProjectsBoxProps';

describe('ProjectsBox', () => {
  const defaultProps: ProjectsBoxProps = {
    link: 'https://github.com',
    className: 'test-class',
    svg: () => <div>SVG</div>,
    text: 'Test text',
    stargazerCount: 10,
    forkCount: 5,
    watchers: { totalCount: 10 }
  };

  it('renders without crashing', () => {
    render(<ProjectsBox props={defaultProps} />);
    expect(screen.getByText('Test text')).toBeInTheDocument();
  });

  it('renders the link correctly', () => {
    render(<ProjectsBox props={defaultProps} />);
    const linkElement = screen.getByText('Test text').closest('a');
    expect(linkElement).toHaveAttribute('href', defaultProps.link);
  });

  it('renders the stargazer count correctly', () => {
    render(<ProjectsBox props={defaultProps} />);
    const stargazerElement = screen.getByText(defaultProps.stargazerCount?.toString() ?? '');
    expect(stargazerElement).toBeInTheDocument();
  });

  it('renders the fork count correctly', () => {
    render(<ProjectsBox props={defaultProps} />);
    const forkElement = screen.getByText(defaultProps.forkCount?.toString() || '');
    expect(forkElement).toBeInTheDocument();
  });

  it('renders the watchers count correctly', () => {
    render(<ProjectsBox props={defaultProps} />);
    const watchersElement = screen.getByText(defaultProps.watchers.totalCount?.toString() || '');
    expect(watchersElement).toBeInTheDocument();
  });

  it('does not render stargazer count when it is not provided', () => {
    const props = { ...defaultProps, stargazerCount: undefined };
    render(<ProjectsBox props={props} />);
    expect(screen.queryByText(/stargazers/i)).not.toBeInTheDocument();
  });

  it('does not render fork count when it is not provided', () => {
    const props = { ...defaultProps, forkCount: undefined };
    render(<ProjectsBox props={props} />);
    expect(screen.queryByText(/forks/i)).not.toBeInTheDocument();
  });

  it('does not render watchers count when it is not provided', () => {
    const props = { ...defaultProps, watchers: undefined };
    render(<ProjectsBox props={props} />);
    expect(screen.queryByText(/watchers/i)).not.toBeInTheDocument();
  });
});
