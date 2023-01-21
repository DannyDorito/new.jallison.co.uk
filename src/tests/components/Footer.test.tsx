import { fireEvent, render, screen } from "@testing-library/react";
import Footer from "../../components/Footer";

describe( "When page is rendered", () =>
{
  it( "should render a black heart", async () =>
  {
    render(
      <Footer darkMode={false} />
    );
    const logo = screen.getByRole( 'img' );
    expect(
      logo
    ).toHaveAttribute( 'src', 'heart-black.svg' );
  } );


  it( "should render a white heart", async () =>
  {
    render(
      <Footer darkMode={true} />
    );

    const logo = screen.getByRole( 'img' );
    expect(
      logo
    ).toHaveAttribute( 'src', 'heart-white.svg' );
  } );

  it( "should render a white heart on click", async () =>
  {
    const onClickMock = jest.fn();

    render(
      <Footer darkMode={false} onClick={onClickMock} />
    );

    fireEvent.click( screen.getByRole( 'img' ) );

    expect( onClickMock ).toBeCalled();
  } );
} );
