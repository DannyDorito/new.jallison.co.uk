import { experience } from '../data/ExperienceData';
import '../scss/components/Experience.scss';

const Experience = () =>
{
  return (
    <>
      <h1 className='no-select'>Experience</h1>
      {experience.map( ( exp ) => (
        <div key={exp.key} className="experience">
          <h2>{exp.company}</h2>
          <p className='experience'>{exp.startDate.toLocaleString( 'default', { month: 'long' } )} {exp.startDate.getFullYear()} - {exp.endDate ? exp.endDate.toLocaleString( 'default', { month: 'long' } ) : "Present"} {exp.endDate?.getFullYear()}</p>
          <p className='experience'>{exp.title}</p>
          <p className='experience'>{exp.location} {exp.workFromHome !== "" && `(${ exp.workFromHome })`}</p>
          {exp.additionalInformation.map( ( add, index ) => (
            <p className='experience' key={exp.key + index}>{add}</p>
          ) )}
        </div>
      ) )}
    </>
  )
}

export default Experience;
