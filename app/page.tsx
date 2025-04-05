"use client";
import About from "@/components/about";
import Lenis from "lenis";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import { useEffect } from "react";
import Head from "next/head";
import Script from "next/script";
import Image from "next/image";

export default function Home() {
  // useEffect(() => {
  //   const lenis = new Lenis();
  //   function raf(time: any) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }
  //   requestAnimationFrame(raf);
  // }, []);

  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <div className="my-6">
        <a href="https://www.buymeacoffee.com/jashagrawal" target="_blank">
          <Image
            src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png"
            width={217}
            height={60}
            alt="Buy Me A Coffee"
            style={{ height: "60px !important", width: "217px !important;" }}
          />
        </a>
      </div>
      <Contact />
    </main>
  );
}
