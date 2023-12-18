import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { awards } from '../../data/AwardsData';
import Awards from '../../components/Awards';

describe('When the page is rendered', () => {
  it('should render the <Awards /> JSX component', async () => {
    render(
      <MemoryRouter>
        <Awards />
      </MemoryRouter>,
    );

    expect(await screen.findByText('Awards')).toBeInTheDocument();
  });

  it('should render all awards', async () => {
    awards.forEach(async (award) => {
      expect(await screen.findByText(award.name)).toBeInTheDocument();
      expect(await screen.findByText(award.additionalInformation)).toBeInTheDocument();
    });
  });

  it('should have the correct class names', async () => {
    awards.forEach(async (award) => {
      const awardElement = await screen.findByText(award.name);
      expect(awardElement).toHaveClass('awards');
    });
  });

  it('should have the correct key for each award', async () => {
    awards.forEach(async (award) => {
      const awardElement = await screen.findByText(award.name);
      expect(awardElement.parentElement).toHaveAttribute('key', award.key);
    });
  });
});
