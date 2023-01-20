import Education from "../components/Education";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import '../scss/pages/Resume.scss';

const Resume = () =>
{
  return (
    <>
      <Skills />
      <Education />
      <Experience />
    </>
  )
};

export default Resume;
