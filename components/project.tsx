"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useCursor } from "@/context/cursor-context";
import { cn } from "@/lib/utils";

type ProjectProps = (typeof projectsData)[number] & {
  isPage?: boolean;
};

export default function Project({
  title,
  link,
  description,
  tags,
  imageUrl,
  isPage = false,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const { projectEnter, makeDefault } = useCursor();
  return (
    <motion.div
      onMouseEnter={() => projectEnter(title)}
      onMouseLeave={() => makeDefault()}
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <a target="_blank" href={link}>
        <section
          className={cn(
            "bg-gray-100 border border-black/5 rounded-lg overflow-hidden sm:pr-0 relative sm:h-[22rem] hover:bg-gray-200 transition sm:group-even:pl-0 dark:text-white dark:bg-white/10 dark:hover:bg-white/20",
            isPage ? "max-w-full" : "max-w-[45rem]"
          )}
        >
          <div className="w-full pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[13rem]">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 text-sm mb-2 leading-relaxed text-gray-700 dark:text-white/70">
              {description}
            </p>
            <ul className="flex flex-wrap mt-4 gap-1 sm:mt-auto">
              {tags.map((tag, index) => (
                <li
                  className="bg-black/[0.7] flex flex-row justify-center items-center px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                  key={index}
                >
                  <div
                    className="mr-2"
                    style={{ color: tag?.color || "#ffffff" }}
                  >
                    {tag?.icon}
                  </div>
                  <p>{tag?.text}</p>
                </li>
              ))}
            </ul>
          </div>

          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            className="absolute hidden sm:block top-8 -right-40 w-[23.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
          />
        </section>
      </a>
    </motion.div>
  );
}
