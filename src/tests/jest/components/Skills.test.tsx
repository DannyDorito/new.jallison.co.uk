import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Skills from "../../../components/Skills";
import { devops, javascriptFrameworks, programmingLanguages } from "../../../types/ProgrammingLanguageData";

describe("When the page is rendered", () => {
  it("should render <Skills /> JSX component", async () => {
    const expectedProgrammingLanguages = programmingLanguages;
    const expectedJavascriptFrameworks = javascriptFrameworks;
    const expectedDevOps = devops;

    render(
      <MemoryRouter>
        <Skills />
      </MemoryRouter>
    );

    expect(
      await screen.findByText("Skills")
    ).toBeInTheDocument();

    expect(
      await screen.findByText("Programming Languages")
    ).toBeInTheDocument();

    expectedProgrammingLanguages.forEach(async expected => {
      expect(
        await screen.findByText(expected.name)
      ).toBeInTheDocument();
    });

    expect(
      await screen.findByText("Frameworks")
    ).toBeInTheDocument();

    expectedJavascriptFrameworks.forEach(async expected => {
      expect(
        await screen.findByText(expected.name)
      ).toBeInTheDocument();
    });

    expect(
      await screen.findByText("DevOps")
    ).toBeInTheDocument();

    expectedDevOps.forEach(async expected => {
      expect(
        await screen.findByText(expected.name)
      ).toBeInTheDocument();
    });
  });
});
