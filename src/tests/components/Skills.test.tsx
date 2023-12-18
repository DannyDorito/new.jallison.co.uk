import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Skills from '../../components/Skills';
import {
  devops,
  javascriptFrameworks,
  programmingLanguages,
} from '../../data/ProgrammingLanguageData';

describe('Skills Component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Skills />
      </MemoryRouter>,
    );
  });

  it('should render Skills title', async () => {
    expect(await screen.findByText('Skills')).toBeInTheDocument();
  });

  it('should render Programming Languages title', async () => {
    expect(await screen.findByText('Programming Languages')).toBeInTheDocument();
  });

  it('should render all programming languages', async () => {
    for (const language of programmingLanguages) {
      expect(await screen.findByText(language.name)).toBeInTheDocument();
    }
  });

  it('should render Frameworks title', async () => {
    expect(await screen.findByText('Frameworks')).toBeInTheDocument();
  });

  it('should render all javascript frameworks', async () => {
    for (const framework of javascriptFrameworks) {
      expect(await screen.findByText(framework.name)).toBeInTheDocument();
    }
  });

  it('should render DevOps title', async () => {
    expect(await screen.findByText('DevOps')).toBeInTheDocument();
  });

  it('should render all devops skills', async () => {
    for (const devopsSkill of devops) {
      expect(await screen.findByText(devopsSkill.name)).toBeInTheDocument();
    }
  });
});
