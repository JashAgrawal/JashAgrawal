"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsDataMap } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-[0.7rem] text-lg text-gray-800">
        {skillsDataMap.map((skill, index) => (
          <motion.li
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.5 },
              backgroundColor: skill.color,
            }}
            className={`bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 flex flex-row justify-center items-center `}
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <div style={{ color: skill.color }} className="mr-2">
              {skill.icon}
            </div>
            <p
              // style={{ color: skill.color }}
              // style={{
              //   background: `linear-gradient(to right,white, ${skill.color},white)`,
              //   WebkitBackgroundClip: "text",
              //   backgroundClip: "text",
              //   color: "transparent",
              // }}
              className={`text-[${skill.color}]`}
            >
              {skill.text}
            </p>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
