import { devops, javascriptFrameworks, programmingLanguages } from "../types/ProgrammingLanguageData";
import '../scss/Skills.scss';

const Skills = () => {
  return (
    <>
      <h1>Skills</h1>
      <h2>Programming Languages</h2>
      <ul className="skill-list">
        {programmingLanguages.map((language) => (
          <li key={language.name}>
            {language.name}
          </li>
        ))}
      </ul>
      <h2>Frameworks</h2>
      <ul className="skill-list">
        {javascriptFrameworks.map((framework) => (
          <li key={framework.name}>
            {framework.name}
          </li>
        ))}
      </ul>
      <h2>DevOps</h2>
      <ul className="skill-list">
        {devops.map((devops) => (
          <li key={devops.name}>
            {devops.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Skills;
