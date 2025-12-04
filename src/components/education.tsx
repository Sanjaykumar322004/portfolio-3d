import { motion } from "framer-motion";
import { EDUCATION } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import { styles } from "../styles";

const Education = () => {
  return (
    <SectionWrapper idName="education">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Academic Journey</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>

      <div className="mt-10 flex flex-col gap-10">
        {EDUCATION.map((edu, i) => (
          <motion.div
            key={i}
            variants={fadeIn("up", "spring", 0.2 * i, 0.75)}
            className="bg-tertiary p-6 rounded-xl"
          >
            <h3 className="text-white text-[22px] font-bold">{edu.degree}</h3>

            <p className="text-secondary text-[16px] mt-1">
              {edu.college} — {edu.year}
            </p>

            {edu.cgpa && (
              <p className="text-white mt-2 font-semibold">CGPA: {edu.cgpa}</p>
            )}

            <ul className="mt-4 list-disc ml-5 space-y-2 text-secondary text-[15px]">
              {edu.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Education;
