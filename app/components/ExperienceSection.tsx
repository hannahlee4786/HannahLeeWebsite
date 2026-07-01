import styles from "../styles/experienceStyles";
import { motion } from "framer-motion";

export default function ExperienceSection() {
  return (
    <div
      style={{
        width: 850,
        margin: "0 auto",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <img
          src="/images/experiences/experience-header.png"
          alt="Experience bead header"
          style={styles.experienceHeader}
        />
      </div>

      {/* illoominate experience */}
      <div style={styles.experience1Container}>
        <motion.div
          style={styles.yellowPostItContainer}
          whileHover={{ rotate: 5, scale: 1.08 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
          <img
            src="/images/experiences/yellow-post-it.png"
            alt="Yellow post it note with orange tape strip"
            style={{ width: 430, display: "block" }}
          />

          <p style={styles.yellowPostItText}>
            Last fall, I had the opportunity to work as a Software Engineer Intern at{" "}
            <strong>illoominate (Bright-Start Ed Tech)</strong>, where I focused on the
            backend of a mobile application that helps parents engage with their
            children through educational activities, lessons, and affirmations.
          </p>
        </motion.div>

        <motion.div
          style={{ ...styles.polaroid, ...styles.polaroid2 }}
          whileHover={{ rotate: -5, scale: 1.05, y: -4 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
          <img
            src="/images/experiences/illoominate-logo.png"
            alt="illoominate logo polaroid"
            style={styles.picture}
          />
          <h3 style={styles.h31}>@illoominate</h3>
        </motion.div>

        <motion.div
          style={styles.greenPostItContainer}
          whileHover={{ rotate: -5, scale: 1.08 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
          <img
            src="/images/experiences/green-post-it.png"
            alt="Green post it note with pink tape strips"
            style={{ height: 420, display: "block" }}
          />

          <p style={styles.greenPostItText}>
            Throughout the internship, I built scalable microservices using TypeScript
            and AWS, designed APIs that connected backend services with the mobile app,
            and collaborated closely with a team of engineers to deliver new features
            and improve system reliability. Working on a product used by real families
            gave me valuable experience building production-level software and taught me
            the importance of designing systems that are both reliable and scalable.
          </p>
        </motion.div>

        <motion.img
          src="/images/experiences/typescript-wax.png"
          alt="Typescript wax stamp"
          style={styles.typescript}
          whileHover={{ rotate: 15, scale: 1.12, y: -4 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        />

        <motion.img
          src="/images/experiences/aws-wax.png"
          alt="AWS wax stamp"
          style={styles.aws}
          whileHover={{ rotate: -15, scale: 1.12, y: -4 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        />

        <motion.div
          style={{
            position: "absolute",
            left: -100,
            top: 480,
            transformOrigin: "center center",
          }}
          whileHover={{ rotate: -5, scale: 1.08 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
          <img
            src="/images/experiences/blue-ticket.png"
            alt="Blue Ticket"
            style={{ width: 300, display: "block" }}
          />

          <h4 style={styles.h41}>Fall 2025</h4>
        </motion.div>
      </div>
    </div>
  );
}