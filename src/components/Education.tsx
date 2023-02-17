import { education } from "../data/EducationData";
import '../scss/components/Education.scss';

const Education = () =>
{
  return (
    <>
      <h1 className='no-select'>Education</h1>
      {education.map( ( edu ) => (
        <div key={edu.key}>
          <h2>{edu.institution}</h2>
          <p className='education'>{edu.startDate.toLocaleString( 'default', { month: 'long' } )} {edu.startDate.getFullYear()} - {edu.endDate.toLocaleString( 'default', { month: 'long' } )} {edu.endDate.getFullYear()}</p>
          <p className='education'>{edu.location}</p>
          <p className='education'>{edu.qualification}</p>
          <p className='education'>{edu.result}</p>
        </div>
      ) )}
    </>
  );
}

export default Education;
