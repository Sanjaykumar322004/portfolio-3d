import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Resume = () => {
  const resumeLink = "https://drive.google.com/file/d/1gh97Rh3ShK8AQ90kh5Mh0JG6B5wKI_-q/view"; // <-- put your resume link

  return (
    <SectionWrapper idName="resume">
      <>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>View My Resume</p>
          <h2 className={styles.sectionHeadText}>Resume.</h2>
        </motion.div>

        <div className="mt-10">
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg duration-200"
          >
            View Resume
          </a>
        </div>
      </>
    </SectionWrapper>
  );
};

export default Resume;
