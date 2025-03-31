"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { BsGrid3X2Gap } from "react-icons/bs";
import Link from "next/link";
import { LuListChecks } from "react-icons/lu";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData
          .sort((a, b) => (a.di || 0) - (b.di || 0))
          .slice(0, 4)
          .map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))}
      </div>
      <Link href="/projects">
        <button className="group mt-8 flex items-center justify-center gap-2 h-[3rem] w-auto px-8 bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65">
          <LuListChecks className="text-base opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
          See all projects
        </button>
      </Link>
    </section>
  );
}
