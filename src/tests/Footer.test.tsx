import { fireEvent, render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

describe("When page is rendered", () => {
  it("should render <Footer /> JSX component", () => {
    render(
      <Footer />
    );

    expect(
      screen.getByText("Made with")
    ).toBeInTheDocument();

    expect(
      screen.getByText("by John Allison")
    ).toBeInTheDocument();
  });

  it("should render a white heart", () => {
    render(
      <Footer darkMode={false} />
    );

    expect(
      screen.getByText("🤍")
    ).toBeInTheDocument();
  });

  it("should render a black heart", () => {
    render(
      <Footer darkMode={true} />
    );

    expect(
      screen.getByText("🖤")
    ).toBeInTheDocument();
  });

  it("should render a black heart on click", () => {
    const onClickMock = jest.fn();

    render(
      <Footer darkMode={false} onClick={onClickMock} />
    );

    fireEvent.click(screen.getByText("🤍"));

    expect(onClickMock).toBeCalled();
  });
});
