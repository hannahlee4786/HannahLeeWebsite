import styles from "../styles/projectsStyles";
import { motion } from "framer-motion";
import ResponsiveCanvas from "./ResponsiveCanvas";
import { Page } from "./Navbar";

interface ProjectsSectionProps {
  onNavigate: (page: Page) => void;
}

export default function ProjectsSection({ onNavigate }: ProjectsSectionProps) {
  return (
    <ResponsiveCanvas>
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

      <div style={styles.projectsContainer}>
        <motion.img
          src="/images/projects/dance-cam-icon.jpg"
          alt="Dance Cam app icon"
          style={styles.danceCam}
          whileHover={{ rotate: 5, scale: 1.12, y: -4 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        />

        <motion.img
          src="/images/projects/dance-cam.png"
          alt="Dance Cam sign"
          style={styles.danceCamSign}
          whileHover={{ scale: 1.12, y: -2 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        />

        <motion.div
          style={{ ...styles.captionContainer, cursor: "pointer" }}
          whileHover={{ rotate: -3, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          onClick={() => onNavigate("experience")}
        >
          <img
            src="/images/projects/caption-paper.png"
            alt="Caption paper"
            style={styles.caption}
          />

          <p style={styles.captionText}>
            Check out the experience page to view the project!
          </p>
        </motion.div>

        <motion.img
          src="/images/projects/hippo.png"
          alt="Clay animal cookie"
          style={styles.hippo}
          whileHover={{ rotate: 5, scale: 1.12, y: -4 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        />

        <motion.img
          src="/images/projects/eight-ball.png"
          alt="Clay 8 ball"
          style={styles.eightBall}
          whileHover={{ rotate: 5, scale: 1.12, y: -4 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        />

        <motion.img
          src="/images/projects/lebron-alarm.png"
          alt="LeBron sign"
          style={styles.lebronSign}
          whileHover={{ scale: 1.10, y: -2 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        />

        <motion.div
          style={styles.binderPaperContainer}
          whileHover={{ rotate: 3, scale: 1.05, y: -8 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
          <img
            src="/images/experiences/binder-paper.png"
            alt="Binder paper"
            style={styles.binderPaper}
          />

          <p style={styles.binderPaperText}>
            A React Native, social alarm app developed as part of a collaborative club project. Schedule alarms for yourself or send alarms to friends. Instead of the traditional snooze button, make three basketball shots to dismiss the alarm. The app also has chat experiences with LeBron James, Bronny James, and Luka Dončić. Our project was awarded <strong>1st Place</strong>!
          </p>
        </motion.div>

        <motion.img
          src="/images/projects/lebron-app.png"
          alt="LeBron banner"
          style={styles.lebronApp}
          whileHover={{ rotate: -5, scale: 1.12, y: -2 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        />

        <motion.img
          src="/images/experiences/react-native.png"
          alt="React Native wax stamp"
          style={styles.reactNative}
          whileHover={{ rotate: -15, scale: 1.12, y: -4 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        />

        <motion.img
          src="/images/projects/javascript-wax.png"
          alt="JavaScript wax stamp"
          style={styles.javascript}
          whileHover={{ rotate: 15, scale: 1.12, y: -4 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        />

        <motion.img
          src="/images/experiences/firebase.png"
          alt="Firebase wax stamp"
          style={styles.firebase}
          whileHover={{ rotate: 15, scale: 1.12, y: -4 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        />

      </div>
    </ResponsiveCanvas>
  );
}