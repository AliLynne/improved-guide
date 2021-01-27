import { Link } from "react-router-dom";

import Resume from "../components/Resume";

const ResumePage = () => {
  return (
    <section className="resume-page">
      <Resume />
      <Link to="/resume.pdf" target="_blank" download>
        Download Resume
      </Link>
    </section>
  );
};

export default ResumePage;
