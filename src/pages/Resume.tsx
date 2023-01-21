import Education from "../components/Education";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import '../scss/pages/Resume.scss';
import Awards from "../components/Awards";

const Resume = () =>
{
  return (
    <>
      <Skills />
      <Education />
      <Experience />
      <Awards />
    </>
  )
};

export default Resume;
