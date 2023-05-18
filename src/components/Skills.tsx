import { devops, javascriptFrameworks, programmingLanguages } from "../data/ProgrammingLanguageData";
import ProficiencyBar from "./ProficiencyBar";
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
            <ProficiencyBar props={{ percent: language.proficiency, name: language.name}}/>
          </li>
        ) )}
      </ul>
      <h2 className='no-select'>Frameworks</h2>
      <ul className="skill-list">
        {javascriptFrameworks.map( ( framework ) => (
          <li key={framework.name}>
            <ProficiencyBar props={{ percent: framework.proficiency, name: framework.name}}/>
          </li>
        ) )}
      </ul>
      <h2 className='no-select'>DevOps</h2>
      <ul className="skill-list">
        {devops.map( ( devops ) => (
          <li key={devops.name}>
            <ProficiencyBar props={{ percent: devops.proficiency, name: devops.name}}/>
          </li>
        ) )}
      </ul>
    </>
  );
}

export default Skills;
