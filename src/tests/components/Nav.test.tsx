import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Nav from '../../components/Nav';

describe('When page is rendered', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>,
    );
  });

  it('should render <Nav /> JSX component', () => {
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Resume')).toBeInTheDocument();
  });
});
