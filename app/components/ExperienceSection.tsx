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
            Last fall, I had the opportunity to work as a Software Engineer Intern at <strong>Bright Start Ed-Tech (illoominate)</strong>, where I contributed to the backend of a mobile application designed to strengthen parent-child relationships through educational activities and personalized learning experiences.
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
          style={styles.graphPaperContainer}
          whileHover={{ rotate: -3, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
          <img
            src="/images/experiences/paper-1.png"
            alt="Graph paper with purple tape strip"
            style={styles.graphPaper}
          />

          <p style={styles.graphPaperText}>
            I built and deployed scalable backend microservices using TypeScript and AWS, designed RESTful APIs to power the mobile application, and collaborated closely with a five-engineer team to ship reliable, production-ready features. Working on a product built to support families showed me how thoughtful technology can create meaningful everyday experiences and reinforced my passion for developing software that puts people first.
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
          style={styles.blueTicketContainer}
          whileHover={{ rotate: -5, scale: 1.08 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
          <img
            src="/images/experiences/blue-ticket.png"
            alt="Blue Ticket"
            style={styles.blueTicket}
          />

          <h4 style={styles.h41}>Sept 2025 ~ Jan 2026</h4>
        </motion.div>
      </div>

      <div style={styles.experience2Container}>
        <motion.img
          src="/images/experiences/makers-logo.png"
          alt="USC Viterbi Makers logo bead"
          style={styles.makersLogo}
          initial={{ rotate: -14 }}
          whileHover={{ rotate: 8, scale: 1.08 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        />

        <motion.div
          style={styles.pinkPaperContainer}
          whileHover={{ rotate: -3, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
          <img
            src="/images/experiences/pink-paper.png"
            alt="Pink paper"
            style={styles.pinkPaper}
          />

          <p style={styles.pinkPaperText}>
            Since September 2024, I've been a Software Engineer with <strong>USC Viterbi Makers</strong>, a student engineering organization where multidisciplinary teams collaborate to build innovative projects that combine software, hardware, and embedded systems. Over the past two years, I've worked on projects spanning mobile development, computer vision, AI, embedded systems, and full-stack applications while collaborating closely with students from a variety of engineering disciplines.
          </p>
        </motion.div>

        <motion.div
          style={styles.makersGroup}
          whileHover={{ scale: 1.05, rotate: 4, y: -4 }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
        >
          <img
            src="/images/experiences/makers.JPG"
            alt="USC Viterbi Makers members"
            style={styles.makers}
          />

          <h3 style={styles.h32}>Makers!!</h3>
        </motion.div>

        <motion.div
          style={styles.greenPostItContainer}
          whileHover={{ rotate: -3, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
          <img
            src="/images/experiences/green-post-it.png"
            alt="Green post it"
            style={styles.greenPostIt}
          />

          <p style={styles.greenPostItText}>
            These experiences have strengthened both my technical and teamwork skills, and beginning in the 2026-2027 academic year, I'll be serving as a <strong>Project Manager</strong>, where I'll mentor fellow engineers and help guide projects from concept to completion. 
          </p>
        </motion.div>

        <motion.div
          style={styles.orangeTicketContainer}
          whileHover={{ rotate: -5, scale: 1.08 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
          <img
            src="/images/experiences/orange-ticket.png"
            alt="Orange Ticket"
            style={styles.orangeTicket}
          />

          <h4 style={styles.h42}>Sept 2024 ~ May 2025</h4>
        </motion.div>

        <motion.div
          style={styles.binderPaperContainer}
          whileHover={{ rotate: -3, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
          <img
            src="/images/experiences/binder-paper.png"
            alt="Binder paper"
            style={styles.binderPaper}
          />
          <h2 style={styles.danceCam}>Dance Cam</h2>

          <p style={styles.binderPaperText}>
            My first project, <strong>Dance Cam</strong>, was an interactive iOS application that combined computer vision with robotics to create a fun, real-time dance experience. I developed the app in Swift and SwiftUI using MediaPipe Pose Landmarker and AVCam, implementing features such as a countdown timer before recording, support for uploading and playing custom music during recordings, and configurable multi-person pose tracking. 
          </p>
        </motion.div>

        <motion.img
          src="/images/experiences/github.png"
          alt="GitHub bottle cap"
          style={styles.github1}
          whileHover={{ rotate: 8, scale: 1.08 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          onClick={() => window.open("https://github.com/uscmakers/DanceCam", "_blank")}
        />

        <motion.img
          src="/images/experiences/dance-cam-app.png"
          alt="Dance Cam app"
          style={styles.danceCamApp}
          whileHover={{ rotate: -4, scale: 1.08 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          onClick={() => window.open("https://docs.google.com/presentation/d/1t-3-cZh6xX9y0qW-H7oV3bZbj8hSNAJys3l-452tSAM/edit?usp=sharing", "_blank")}
        />

        <motion.div
          style={styles.greenYellowPaperContainer}
          whileHover={{ rotate: 3, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
          <img
            src="/images/experiences/green-yellow-paper.png"
            alt="Binder paper"
            style={styles.greenYellowPaper}
          />

          <p style={styles.greenYellowPaperText}>
            I also collaborated with my team to integrate the application with a Raspberry Pi-controlled robot, enabling synchronized, low-latency interactions between the mobile app and hardware. Working on Dance Cam introduced me to the challenges of building responsive, real-time applications while showing me how software and robotics can come together to create engaging user experiences.
          </p>
        </motion.div>

        <motion.div
          style={{ ...styles.polaroid, ...styles.polaroid3 }}
          whileHover={{ rotate: -5, scale: 1.05, y: -4 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
          <img
            src="/images/experiences/dance-cam-vehicle.png"
            alt="Dance Cam vehicle polaroid"
            style={styles.picture2}
          />
          <h3 style={styles.h33}>vehicle!</h3>
        </motion.div>

        <motion.div
          style={styles.btsContainer}
          whileHover={{ rotate: -3, scale: 1.05, y: -4 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
          <h1 style={styles.bts}>
            app icon designed by me! (shout out bts 💜)
          </h1>
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
      </div>
    </div>
  );
}