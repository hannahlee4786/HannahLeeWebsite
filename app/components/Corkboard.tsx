"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import ProjectsSection from "./ProjectsSection";
import styles from "../styles/corkboard.module.css";

const positions = {
  about: { x: 0, y: 0 },
  experience: { x: 0, y: -1200 },
  projects: { x: 0, y: -2400 },
};

type Section = keyof typeof positions;

export default function Corkboard() {
  const [current, setCurrent] = useState<Section>("about");

    return (
      <>
        <div className={styles.nav}>
          <button onClick={() => setCurrent("projects")}>
            Projects
          </button>

          <button onClick={() => setCurrent("about")}>
            About
          </button>
    
          <button onClick={() => setCurrent("experience")}>
            Experience
          </button>
        </div>
    
        <div className={styles.viewport}>
          <motion.div
            className={styles.board}
            animate={positions[current]}
            initial={positions.about}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
            }}
          > 
            <div className={styles.about}>
              <AboutSection />
            </div>
    
            <div className={styles.experience}>
              <ExperienceSection />
            </div>

            <div className={styles.projects}>
              <ProjectsSection />
            </div>
          </motion.div>
        </div>
      </>
    );
}