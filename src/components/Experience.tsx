import '../scss/Experience.scss';
import { experience } from '../types/ExperienceData';

const Experience = () =>
{
  return (
    <>
      <h1 className='no-select'>Experience</h1>
      {experience.map( ( exp ) => (
        <div key={exp.key}>
          <h2>{exp.company}</h2>
          <p className='experience'>{exp.startDate.toLocaleString( 'default', { month: 'long' } )} {exp.startDate.getFullYear()} - {exp.endDate ? exp.endDate.toLocaleString( 'default', { month: 'long' } ) : "Present"} {exp.endDate?.getFullYear()}</p>
          <p className='experience'>{exp.title}</p>
          <p className='experience'>{exp.location}</p>
          {exp.workFromHome !== "" && <p className='experience'>{exp.workFromHome}</p>}
          {exp.additionalInformation.map( ( add ) => (
            <p className='experience'>{add}</p>
          ) )}
        </div>
      ) )}
    </>
  )
}

export default Experience;
