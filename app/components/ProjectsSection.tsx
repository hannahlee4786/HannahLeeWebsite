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
          whileHover={{ scale: 1.06 }}
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
          whileHover={{ scale: 1.05, }}
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

        <motion.img
          src="/images/experiences/github.png"
          alt="GitHub bottle cap"
          style={styles.github1}
          whileHover={{ rotate: 8, scale: 1.08 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          onClick={() => window.open("https://github.com/hannahlee4786/LebronAlarmApp", "_blank")}
        />

        <motion.img
          src="/images/projects/moodify-sign.png"
          alt="Moodify sign"
          style={styles.moodifySign}
          whileHover={{ scale: 1.12, y: -2 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        />

        <motion.img
          src="/images/projects/moodify-search.png"
          alt="Moodify song search screen"
          style={styles.moodifySearch}
          whileHover={{ rotate: -3, scale: 1.12, y: -2 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        />

        <motion.div
          style={styles.moodifyContainer}
          whileHover={{ scale: 1.03, y: -2 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
          <img
            src="/images/aboutMe/beige-paper.png"
            alt="Background paper for introduction"
            style={styles.moodifyPaper}
          />

          <div style={styles.moodifyText}>
            <p style={styles.moodifyParagraph}>
              A full-stack iOS application built with SwiftUI, Firebase, and Spotify's Web API that allows users to post a daily song alongside a caption and mood. The app features Spotify authentication, real-time cloud data storage, and music search integration, providing a seamless social experience centered around music.
            </p>
          </div>
        </motion.div>

        <motion.img
          src="/images/projects/moodify-app-icon.jpg"
          alt="Moodify app icon"
          style={styles.moodifyIcon}
          whileHover={{ rotate: 5, scale: 1.12, y: -4 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        />

        <motion.div
          style={{ ...styles.polaroid, ...styles.polaroid2 }}
          whileHover={{ rotate: 5, scale: 1.05, y: -4 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
          <img
            src="/images/projects/moodify-login.jpg"
            alt="Moodify login polaroid"
            style={styles.picture}
          />
          <h3 style={styles.h31}>login page!</h3>
        </motion.div>

        <motion.img
          src="/images/experiences/swift-wax.png"
          alt="Swift wax stamp"
          style={styles.swift}
          whileHover={{ rotate: 8, scale: 1.08 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        />

        <motion.img
          src="/images/experiences/swiftui-wax.png"
          alt="SwiftUI wax stamp"
          style={styles.swiftui}
          whileHover={{ rotate: -8, scale: 1.08 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        />

        <motion.img
          src="/images/experiences/firebase.png"
          alt="Firebase wax stamp"
          style={styles.firebase2}
          whileHover={{ rotate: 15, scale: 1.12, y: -4 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        />

        <motion.img
          src="/images/experiences/github.png"
          alt="GitHub bottle cap"
          style={styles.github2}
          whileHover={{ rotate: 8, scale: 1.08 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          onClick={() => window.open("https://github.com/hannahlee4786/Moodify", "_blank")}
        />
      </div>
    </ResponsiveCanvas>
  );
}