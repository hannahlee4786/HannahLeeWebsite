import styles from "../styles/experienceStyles";
import { motion } from "framer-motion";
import ResponsiveCanvas from "./ResponsiveCanvas";

export default function ExperienceSection() {
  return (
    <ResponsiveCanvas>
      <div style={{ textAlign: "center" }}>
        <div style={styles.mainHeader}>
          <motion.img
            src="/images/experiences/star.png"
            alt="Star bead"
            style={styles.star1}
            whileHover={{ scale: 1.4, zIndex: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />

          <motion.img
            src="/images/experiences/e.png"
            alt="Letter e bead"
            style={styles.e1}
            whileHover={{ scale: 1.4, zIndex: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />

          <motion.img
            src="/images/experiences/x.png"
            alt="Letter p bead"
            style={styles.x}
            whileHover={{ scale: 1.4, zIndex: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />

          <motion.img
            src="/images/experiences/p.png"
            alt="Letter p bead"
            style={styles.p}
            whileHover={{ scale: 1.4, zIndex: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />

          <motion.img
            src="/images/experiences/e.png"
            alt="Letter e bead"
            style={styles.e2}
            whileHover={{ scale: 1.4, zIndex: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />

          <motion.img
            src="/images/experiences/r.png"
            alt="Letter r bead"
            style={styles.r}
            whileHover={{ scale: 1.4, zIndex: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />

          <motion.img
            src="/images/experiences/i.png"
            alt="Letter i bead"
            style={styles.i}
            whileHover={{ scale: 1.4, zIndex: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />

          <motion.img
            src="/images/experiences/e.png"
            alt="Letter e bead"
            style={styles.e3}
            whileHover={{ scale: 1.4, zIndex: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />

          <motion.img
            src="/images/experiences/n.png"
            alt="Letter n bead"
            style={styles.n}
            whileHover={{ scale: 1.4, zIndex: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />

          <motion.img
            src="/images/experiences/c.png"
            alt="Letter c bead"
            style={styles.c}
            whileHover={{ scale: 1.4, zIndex: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />

          <motion.img
            src="/images/experiences/e.png"
            alt="Letter e bead"
            style={styles.e4}
            whileHover={{ scale: 1.4, zIndex: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />

          <motion.img
            src="/images/experiences/star.png"
            alt="Star bead"
            style={styles.star2}
            whileHover={{ scale: 1.4, zIndex: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />
        </div>
      </div>

      {/* illoominate experience */}
      <div style={styles.experience1Container}>
        <motion.div
          style={styles.yellowPostItContainer}
          whileHover={{ scale: 1.08 }}
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
          whileHover={{ rotate: -5, scale: 1.05, y: -4, cursor: "pointer" }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          onClick={() => window.open("https://www.illoominate.net/", "_blank")}
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
          whileHover={{ scale: 1.02 }}
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

        <motion.img
          src="/images/experiences/pink-bow.png"
          alt="Pink bow"
          style={styles.pinkBow}
          whileHover={{ rotate: -5, scale: 1.12, y: -4 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        />

        <motion.div
          style={styles.blueTicketContainer}
          whileHover={{ rotate: 5, scale: 1.08 }}
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
          whileHover={{ rotate: 8, scale: 1.08, cursor: "pointer"}}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          onClick={() => window.open("https://github.com/uscmakers/FIFO", "_blank")}
        />

        <motion.div
          style={styles.pinkPaperContainer}
          whileHover={{ scale: 1.02 }}
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
          whileHover={{ scale: 1.06 }}
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

          <h4 style={styles.h42}>Sept 2024 ~ April 2025</h4>
        </motion.div>

        <motion.div
          style={styles.binderPaperContainer}
          whileHover={{ scale: 1.02 }}
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

        <motion.div
          style={styles.danceCamCard}
          whileHover={{ rotate: 4, scale: 1.08 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          onClick={() =>
            window.open(
              "https://docs.google.com/presentation/d/1t-3-cZh6xX9y0qW-H7oV3bZbj8hSNAJys3l-452tSAM/edit?usp=sharing",
              "_blank"
            )
          }
        >
          <img
            src="/images/experiences/dance-cam-app.png"
            alt="Dance Cam app"
            style={styles.danceCamApp}
          />

          <p style={styles.danceCamText}>
            click to view slides!
          </p>
        </motion.div>

        <motion.div
          style={styles.greenYellowPaperContainer}
          whileHover={{ scale: 1.02 }}
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

        <motion.img
          src="/images/experiences/dinosaur.png"
          alt="Clay dinosaur"
          style={styles.dinosaur}
          whileHover={{ rotate: 15, scale: 1.12, y: -4 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        />

        <motion.img
          src="/images/experiences/cookie.png"
          alt="Clay cookie"
          style={styles.cookie}
          whileHover={{ rotate: 15, scale: 1.12, y: -4 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        />

        <motion.div
          style={styles.btsContainer}
          whileHover={{ rotate: -3, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
          <h1 style={styles.bts}>
            app icon designed by me! (shout out to bts 💜)
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

        <motion.div
          style={styles.pinkTicketContainer}
          whileHover={{ rotate: 5, scale: 1.08 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
          <img
            src="/images/experiences/pink-ticket.png"
            alt="Pink Ticket"
            style={styles.pinkTicket}
          />

          <h4 style={styles.h43}>Sept 2025 ~ May 2026</h4>
        </motion.div>

        <motion.img
          src="/images/experiences/github.png"
          alt="GitHub bottle cap"
          style={styles.github2}
          whileHover={{ rotate: 8, scale: 1.08 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          onClick={() => window.open("https://github.com/uscmakers/FIFO", "_blank")}
        />

        <motion.div
          style={styles.purplePaperContainer}
          whileHover={{ scale: 1.08 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
          <img
            src="/images/experiences/purple-paper.png"
            alt="Purple paper with green tape"
            style={styles.purplePaper}
          />

          <p style={styles.purplePaperText}>
            My second project, <strong>FIFO</strong>, focused on helping users better manage groceries and reduce food waste through a smart inventory management system. I developed several core features for the React Native application, including Firebase Authentication for secure user accounts and a barcode scanner that retrieves product information and allows users to save items directly to Firestore. I also implemented deep linking between the inventory application and a Unity-based streak game, creating a seamless experience across both apps. 
          </p>
        </motion.div>

        <motion.div
          style={{ ...styles.polaroid, ...styles.polaroid4 }}
          whileHover={{ rotate: -5, scale: 1.05, y: -4, cursor: "pointer" }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          onClick={() => window.open("https://canva.link/6uc5mvtc7360lgo", "_blank")}
        >
          <img
            src="/images/experiences/fifo-fridge.jpg"
            alt="FIFO fridge"
            style={styles.picture}
          />
          <h3 style={styles.h34}>click to view slides!</h3>
        </motion.div>

        <motion.div
          style={styles.bluePaperContainer}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
          <img
            src="/images/experiences/blue-paper.png"
            alt="Blue paper with tape"
            style={styles.bluePaper}
          />

          <p style={styles.bluePaperText}>
            To support automated inventory tracking, I integrated the React Native application with our machine learning pipeline using ngrok, allowing detected additions and removals of grocery items to synchronize with Firestore in real time. Through FIFO, I gained valuable experience building full-stack mobile applications and reinforced my passion for creating technology that solves meaningful, everyday problems.
          </p>
        </motion.div>

        <motion.div
          style={{ ...styles.polaroid, ...styles.polaroid5 }}
          whileHover={{ rotate: 5, scale: 1.05, y: -4 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
          <img
            src="/images/experiences/fifo-fam.JPG"
            alt="FIFO fridge"
            style={styles.picture}
          />
          <h3 style={styles.h35}>fifo fam!!</h3>
        </motion.div>

        <motion.img
          src="/images/experiences/react-native.png"
          alt="React Native wax stamp"
          style={styles.reactNative}
          whileHover={{ rotate: -15, scale: 1.12, y: -4 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        />

        <motion.img
          src="/images/experiences/typescript-wax.png"
          alt="Typescript wax stamp"
          style={styles.typescript2}
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
          src="/images/experiences/capybara.png"
          alt="Capybara"
          style={styles.capybara}
          whileHover={{ rotate: 15, scale: 1.12, y: -4 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        />
      </div>

      <div style={styles.footerContainer}>
        <footer style={styles.footer}>
          <p>© {new Date().getFullYear()} Hannah Lee</p>
        </footer>
      </div>
    </ResponsiveCanvas>
  );
}