import styles from "../styles/projectsStyles";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  return (
    <div
      style={{
        width: 850,
        margin: "0 auto",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div style={styles.mainHeader}>
          <motion.img
            src="/images/projects/p.png"
            alt="Letter p bead"
            style={styles.p}
            whileHover={{ scale: 1.4, zIndex: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />

          <motion.img
            src="/images/projects/r.png"
            alt="Letter r bead"
            style={styles.r}
            whileHover={{ scale: 1.4, zIndex: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />

          <motion.img
            src="/images/projects/o.png"
            alt="Letter o bead"
            style={styles.o}
            whileHover={{ scale: 1.4, zIndex: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />

          <motion.img
            src="/images/projects/j.png"
            alt="Letter j bead"
            style={styles.j}
            whileHover={{ scale: 1.4, zIndex: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />

          <motion.img
            src="/images/projects/e.png"
            alt="Letter e bead"
            style={styles.e}
            whileHover={{ scale: 1.4, zIndex: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />

          <motion.img
            src="/images/projects/c.png"
            alt="Letter c bead"
            style={styles.c}
            whileHover={{ scale: 1.4, zIndex: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />

          <motion.img
            src="/images/projects/t.png"
            alt="Letter t bead"
            style={styles.t}
            whileHover={{ scale: 1.4, zIndex: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />

          <motion.img
            src="/images/projects/s.png"
            alt="Letter s bead"
            style={styles.s}
            whileHover={{ scale: 1.4, zIndex: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />
        </div>
      </div>
    </div>
  );
}