import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import Image from 'next/image'

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../../styles/roadmap";
import { roadmap } from "../../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex items-center justify-center w-full h-full">
          <Image
            src={experience.icon}
            alt={experience.phase}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.phase}
        </p>
      </div>

      <ul className="mt-5 ml-5 space-y-2 list-disc">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}> Fort Knox, but for Bananas</p>
        <h2 className={styles.sectionHeadText}>Roadmap</h2>
      </motion.div>

      <div className="flex flex-col mt-20 " id='roadmap-section'>
        <VerticalTimeline>
          {roadmap.map((roadmapStep, index) => (
            <ExperienceCard key={index} experience={roadmapStep} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
