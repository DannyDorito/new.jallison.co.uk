import { devops, javascriptFrameworks, programmingLanguages } from "../data/ProgrammingLanguageData";
import { proficiencyBar } from "../helpers/ProficiencyBar";
import '../scss/components/Skills.scss';

const Skills = () =>
{
  return (
    <>
      <h1 className='no-select'>Skills</h1>
      <h2 className='no-select'>Programming Languages</h2>
      <ul className="skill-list">
        {programmingLanguages.map( ( language ) => (
          <li key={language.name}>
            {language.name}
            {proficiencyBar(language.proficiency)}
          </li>
        ) )}
      </ul>
      <h2 className='no-select'>Frameworks</h2>
      <ul className="skill-list">
        {javascriptFrameworks.map( ( framework ) => (
          <li key={framework.name}>
            {framework.name}
            {proficiencyBar(framework.proficiency)}
          </li>
        ) )}
      </ul>
      <h2 className='no-select'>DevOps</h2>
      <ul className="skill-list">
        {devops.map( ( devops ) => (
          <li key={devops.name}>
            {devops.name}
            {proficiencyBar(devops.proficiency)}
          </li>
        ) )}
      </ul>
    </>
  );
}

export default Skills;
