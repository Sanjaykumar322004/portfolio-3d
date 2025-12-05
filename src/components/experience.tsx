import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import { styles } from "../styles";

// Type for a single experience item from your constants
type ExperienceItem = (typeof EXPERIENCES)[number];

type ExperienceCardProps = {
  exp: ExperienceItem;
  index: number;
};

// Single Experience Card
const ExperienceCard = ({ exp, index }: ExperienceCardProps) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 0.75)}
    className="bg-tertiary p-6 rounded-2xl shadow-lg border border-gray-700"
  >
    <div className="flex items-center gap-4">
      <img
        src={exp.icon}
        alt={exp.company_name}
        className="w-12 h-12 rounded-full object-cover"
      />

      <div>
        <h3 className="text-white font-bold text-[20px]">{exp.title}</h3>
        <p className="text-secondary text-[14px]">{exp.company_name}</p>
        <p className="text-secondary text-[14px]">{exp.date}</p>
      </div>
    </div>

    <ul className="mt-4 ml-5 list-disc space-y-2 text-secondary text-[15px]">
      {exp.points.map((point, i) => (
        <li key={i}>{point}</li>
      ))}
    </ul>
  </motion.div>
);

// Experience section
export const Experience = () => (
  <SectionWrapper idName="work">
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work Experience</p>
        <h2 className={styles.sectionHeadText}>Experience.</h2>
      </motion.div>

      <div className="mt-10 flex flex-col gap-8">
        {EXPERIENCES.map((exp, i) => (
          <ExperienceCard key={i} exp={exp} index={i} />
        ))}
      </div>
    </>
  </SectionWrapper>
);

// optional, but doesn't hurt:
export default Experience;



