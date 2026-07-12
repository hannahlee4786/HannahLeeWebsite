import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/navbarStyles";

export type Page = "home" | "experience" | "projects";

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const homeItems = [
  {
    label: "Experience",
    page: "experience" as const,
    src: "/images/navbar/experience.png",
    alt: "Experience button",
  },
  {
    label: "Projects",
    page: "projects" as const,
    src: "/images/navbar/projects.png",
    alt: "Projects button",
  },
];

export default function Navbar({
  currentPage,
  onNavigate,
}: NavbarProps) {
  return (
    <nav style={styles.navbar}>
      <div style={ currentPage === "home" ? styles.navbarContainer : styles.backContainer} >
        {currentPage === "home" ? (
          homeItems.map((item) => (
            <motion.img
              key={item.page}
              src={item.src}
              alt={item.alt}
              style={{ ...styles.buttons, cursor: "pointer", }}
              whileHover={{ scale: 1.05, y: -4, }}
              transition={{ type: "spring", stiffness: 260, damping: 18, }}
              onClick={() => onNavigate(item.page)}
            />
          ))
        ) : (
          <motion.img
            src="/images/navbar/back.png"
            alt="Back"
            style={{ ...styles.buttons, cursor: "pointer", }}
            whileHover={{ scale: 1.05, y: -4, }}
            transition={{ type: "spring", stiffness: 260, damping: 18, }}
            onClick={() => onNavigate("home")}
          />
        )}
      </div>
    </nav>
  );
}
