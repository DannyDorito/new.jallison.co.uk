import Education from "../components/Education";
import Skills from "../components/Skills";
import '../scss/Resume.scss';
import Experience from "../components/Experience";

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
