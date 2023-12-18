import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Contact from '../../pages/Contact';
import { socialData } from '../../data/SocialData';

describe( 'Contact Component', () =>
{
  beforeEach( () =>
  {
    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>,
    );
  } );

  it( 'should render without crashing', () =>
  {
    const contactComponent = screen.getByTestId( 'contact-component' );
    expect( contactComponent ).toBeInTheDocument();
  } );

  it( 'should render the heading', async () =>
  {
    const heading = await screen.findByText( 'Contact me' );
    expect( heading ).toBeInTheDocument();
  } );

  it( 'should render all social media platforms', async () =>
  {
    for ( const social of socialData )
    {
      const platformElement = await screen.findByText( social.platform );
      expect( platformElement ).toBeInTheDocument();
      expect( platformElement.closest( 'a' ) ).toHaveAttribute( 'href', social.link );
    }
  } );
} );
