import styles from "../styles/projectsStyles";
import { motion } from "framer-motion";
import ResponsiveCanvas from "./ResponsiveCanvas";
import { Page } from "./Navbar";
import styles2 from "../styles/aboutMeStyles";

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
          whileHover={{ rotate: -15, scale: 1.12, y: -4, cursor: "pointer" }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          onClick={() => window.open("https://reactnative.dev/", "_blank")}
        />

        <motion.img
          src="/images/projects/javascript-wax.png"
          alt="JavaScript wax stamp"
          style={styles.javascript}
          whileHover={{ rotate: 15, scale: 1.12, y: -4, cursor: "pointer" }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          onClick={() => window.open("https://devdocs.io/javascript/", "_blank")}
        />

        <motion.img
          src="/images/experiences/firebase.png"
          alt="Firebase wax stamp"
          style={styles.firebase}
          whileHover={{ rotate: 15, scale: 1.12, y: -4, cursor: "pointer" }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          onClick={() => window.open("https://firebase.google.com/docs/android/setup?utm_source=google&utm_medium=cpc&utm_campaign=Cloud-SS-DR-Firebase-FY26-global-gsem-1713590&utm_content=text-ad&utm_term=KW_firebase&gclsrc=aw.ds&gad_source=1&gad_campaignid=23417478209&gbraid=0AAAAADpUDOgkonVaQpkNr5Txks669MSQA&gclid=CjwKCAjw08fSBhA7EiwAfbQTsNlBAmeG0gUJo0dGYrLYV4B_2TzaeJ-SBpAHJ1sIsVc7oeHtuvh4EBoCfC0QAvD_BwE", "_blank")}
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
          whileHover={{ rotate: 8, scale: 1.08, cursor: "pointer" }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          onClick={() => window.open("https://www.swift.org/", "_blank")}
        />

        <motion.img
          src="/images/experiences/swiftui-wax.png"
          alt="SwiftUI wax stamp"
          style={styles.swiftui}
          whileHover={{ rotate: -8, scale: 1.08, cursor: "pointer" }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          onClick={() => window.open("https://developer.apple.com/swiftui/", "_blank")}
        />

        <motion.img
          src="/images/experiences/firebase.png"
          alt="Firebase wax stamp"
          style={styles.firebase2}
          whileHover={{ rotate: 15, scale: 1.12, y: -4, cursor: "pointer" }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          onClick={() => window.open("https://firebase.google.com/docs/android/setup?utm_source=google&utm_medium=cpc&utm_campaign=Cloud-SS-DR-Firebase-FY26-global-gsem-1713590&utm_content=text-ad&utm_term=KW_firebase&gclsrc=aw.ds&gad_source=1&gad_campaignid=23417478209&gbraid=0AAAAADpUDOgkonVaQpkNr5Txks669MSQA&gclid=CjwKCAjw08fSBhA7EiwAfbQTsNlBAmeG0gUJo0dGYrLYV4B_2TzaeJ-SBpAHJ1sIsVc7oeHtuvh4EBoCfC0QAvD_BwE", "_blank")}
        />

        <motion.img
          src="/images/experiences/github.png"
          alt="GitHub bottle cap"
          style={styles.github2}
          whileHover={{ rotate: 8, scale: 1.08 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          onClick={() => window.open("https://github.com/hannahlee4786/Moodify", "_blank")}
        />

        <motion.img
          src="/images/projects/mindlog-sign.png"
          alt="MindLog sign"
          style={styles.mindlogSign}
          whileHover={{ scale: 1.12, y: -2 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        />

        <motion.img
          src="/images/projects/mindlog-app-icon.png"
          alt="MindLog app icon"
          style={styles.mindlogIcon}
          whileHover={{ rotate: 5, scale: 1.12, y: -4 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        />

        <motion.div
          style={styles.tapePaperContainer}
          whileHover={{ scale: 1.02, }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
          <img
            src="/images/projects/paper-tape.png"
            alt="Paper with tape strip"
            style={styles.tapePaper}
          />

          <p style={styles.tapePaperText}>
            An AI-powered wellness journal developed for <strong>AthenaHacks</strong> that combines contactless biometric stress sensing with personalized daily reflections. Using Gemini, MongoDB, Presage, Elevenlabs, and Next.js, the app transforms voice and/or text journal entries into AI-generated summaries, affirmations, gratitude lists, and music recommendations while tracking stress trends over time. Our team was awarded [MLH] Best Use of MongoDB Atlas for creating an end-to-end platform that encourages mindful reflection in a more supportive and personalized way.
          </p>
        </motion.div>

        <motion.div
          style={{ ...styles.polaroid, ...styles.polaroid3 }}
          whileHover={{ rotate: 5, scale: 1.05, y: -4, cursor: "pointer" }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          onClick={() => window.open("https://glyph-siesta-70918141.figma.site/", "_blank")}
        >
          <img
            src="/images/projects/mindlog-snapshot.png"
            alt="MindLog snapshot polaroid"
            style={styles.picture2}
          />
          <h3 style={styles.h32}>click to view ui</h3>
        </motion.div>

        <motion.img
          src="/images/projects/mindlog-journal.png"
          alt="MindLog journal entry"
          style={styles.mindlogJournal}
          whileHover={{ rotate: -2, scale: 1.05, y: -4 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        />

        <motion.img
          src="/images/projects/devpost.png"
          alt="Devpost bottle cap"
          style={styles.devpost}
          whileHover={{ rotate: 8, scale: 1.08 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          onClick={() => window.open("https://devpost.com/software/mindlog-f5nx08?_gl=1*1frae0i*_gcl_au*MjEyOTcyMDAyMi4xNzgyMTYyNjcz*_ga*MTEyOTMxNDY1Mi4xNzgyMTYyNjcz*_ga_0YHJK3Y10M*czE3ODM2MjgzMzYkbzIkZzEkdDE3ODM2Mjg1ODMkajM1JGwwJGgw", "_blank")}
        />

        <motion.img
          src="/images/projects/mongodb.png"
          alt="MongoDB wax stamp"
          style={styles.mongoDB}
          whileHover={{ rotate: -15, scale: 1.12, y: -4, cursor: "pointer" }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          onClick={() => window.open("https://www.mongodb.com/", "_blank")}
        />

        <motion.img
          src="/images/projects/nextjs.png"
          alt="Next.js wax stamp"
          style={styles.nextjs}
          whileHover={{ rotate: 15, scale: 1.12, y: -4, cursor: "pointer" }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          onClick={() => window.open("https://nextjs.org/", "_blank")}
        />

        <motion.img
          src="/images/projects/python.png"
          alt="Python wax stamp"
          style={styles.python}
          whileHover={{ rotate: 15, scale: 1.12, y: -4, cursor: "pointer" }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          onClick={() => window.open("https://www.python.org/doc/", "_blank")}
        />

        <motion.img
          src="/images/experiences/swift-wax.png"
          alt="Swift wax stamp"
          style={styles.swift2}
          whileHover={{ rotate: 15, scale: 1.12, y: -4, cursor: "pointer" }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          onClick={() => window.open("https://www.swift.org/", "_blank")}
        />

        <motion.img
          src="/images/projects/mealshare-sign.png"
          alt="MealShare sign"
          style={styles.mealshareSign}
          whileHover={{ scale: 1.12, y: -2 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        />

        <motion.img
          src="/images/experiences/github.png"
          alt="GitHub bottle cap"
          style={styles.github3}
          whileHover={{ rotate: -8, scale: 1.08 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          onClick={() => window.open("https://github.com/hannahlee4786/MealShare", "_blank")}
        />

        <motion.div
          style={{ ...styles.polaroid, ...styles.polaroid4 }}
          whileHover={{ rotate: 5, scale: 1.05, y: -4 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
          <img
            src="/images/projects/mealshare-login.png"
            alt="MealShare login polaroid"
            style={styles.picture3}
          />
          <h3 style={styles.h33}>login page</h3>
        </motion.div>

        <motion.img
          src="/images/projects/mealshare-mymeals.png"
          alt="MealShare My Meals Page"
          style={styles.mealshareMeals}
          whileHover={{ rotate: -2, scale: 1.05, y: -4 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        />

        <motion.div
          style={styles.binderPaperContainer2}
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
          <img
            src="/images/aboutMe/binder-paper.png"
            alt="Binder paper for tests used"
            style={styles.binderPaper2}
          />

          
          <div style={styles.binderPaperText2}>
            <strong>Tests:</strong>
            <ul>
              <li>JUnit</li>
              <li>Jest</li>
              <li>Selenium</li>
              <li>Cucumber</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          style={styles.bluePaperContainer}
          whileHover={{ scale: 1.06, }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
          <img
            src="/images/projects/blue-paper.png"
            alt="Blue paper"
            style={styles.bluePaper}
          />

          <p style={styles.bluePaperText}>
            A full-stack web application that makes planning meals with friends easier by allowing users to search for recipes, save favorites, and create events with invitations. As part of a Software Engineering group project, we implemented features such as secure authentication, recipe search, shopping list generation, allergen-aware event planning, and extensive unit and acceptance testing.
          </p>
        </motion.div>

        <motion.img
          src="/images/projects/java-wax.png"
          alt="Java wax stamp"
          style={styles.java}
          whileHover={{ rotate: -15, scale: 1.12, y: -4, cursor: "pointer" }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          onClick={() => window.open("https://www.java.com/en/", "_blank")}
        />

        <motion.img
          src="/images/projects/javascript-wax.png"
          alt="JavaScript wax stamp"
          style={styles.javascript2}
          whileHover={{ rotate: 15, scale: 1.12, y: -4, cursor: "pointer" }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          onClick={() => window.open("https://devdocs.io/javascript/", "_blank")}
        />

        <motion.img
          src="/images/projects/springboot-wax.png"
          alt="Spring Boot wax stamp"
          style={styles.springboot}
          whileHover={{ rotate: -15, scale: 1.12, y: -4, cursor: "pointer" }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          onClick={() => window.open("https://spring.io/projects/spring-boot", "_blank")}
        />

        <motion.img
          src="/images/projects/fifo-sign.png"
          alt="FIFO sign"
          style={styles.fifoSign}
          whileHover={{ scale: 1.10, y: -2 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        />

        <motion.img
          src="/images/projects/fifo-app-icon.png"
          alt="FIFO app icon"
          style={styles.fifo}
          whileHover={{ rotate: 5, scale: 1.12, y: -4 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        />

        <motion.div
          style={{ ...styles.captionContainer2, cursor: "pointer" }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          onClick={() => onNavigate("experience")}
        >
          <img
            src="/images/projects/caption-paper.png"
            alt="Caption paper 2"
            style={styles.caption2}
          />

          <p style={styles.captionText2}>
            Check out the experience page to view the project!
          </p>
        </motion.div>

        <motion.img
          src="/images/projects/lenny.png"
          alt="Dog stuffed animal"
          style={styles.dog}
          whileHover={{ rotate: 5, scale: 1.12, y: -4 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        />

        <motion.img
          src="/images/projects/calico.png"
          alt="Calico Critter"
          style={styles.calico}
          whileHover={{ rotate: 5, scale: 1.12, y: -4 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        />

        <motion.img
          src="/images/projects/this-website-sign.png"
          alt="This Website sign"
          style={styles.websiteSign}
          whileHover={{ scale: 1.10, y: -2 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        />

        <motion.img
          src="/images/experiences/github.png"
          alt="GitHub bottle cap"
          style={styles.github4}
          whileHover={{ rotate: 8, scale: 1.08 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          onClick={() => window.open("https://github.com/hannahlee4786/HannahLee", "_blank")}
        />

        <motion.div
          style={{ ...styles.pinterestContainer, cursor: "pointer" }}
          whileTap={{ scale: 0.98 }}
          whileHover={{ scale: 1.05, y: -4, cursor: "pointer" }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          onClick={() => window.open("https://www.pinterest.com/pin/1097541371703194468/", "_blank")}
        >
          <img
            src="/images/projects/pinterest.png"
            alt="Pinterest inspo page"
            style={styles.pinterest}
          />

          <h3 style={styles.h34}>@wloeun on Pinterest</h3>
        </motion.div>

        <motion.div
          style={styles.whitePostItContainer}
          whileHover={{ scale: 1.06, }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
          <img
            src="/images/projects/white-post-it.png"
            alt="White post it"
            style={styles.whitePostIt}
          />

          <p style={styles.whitePostItText}>
            {"Inspired by the cute corkboard aesthetic on Pinterest (like the one on the left), I wanted to create a portfolio that feels warm and personal while showcasing the projects and experiences I've worked on over the past few years. I hope this gives everyone a glimpse into not only what I've built, but also who I am as both an engineer and a person :)"}
          </p>
        </motion.div>

        <motion.img
          src="/images/projects/nextjs.png"
          alt="Next.js wax stamp"
          style={styles.nextjs2}
          whileHover={{ rotate: -8, scale: 1.08, cursor: "pointer" }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          onClick={() => window.open("https://nextjs.org/", "_blank")}
        />

        <motion.img
          src="/images/experiences/typescript-wax.png"
          alt="TypeScript wax stamp"
          style={styles.typescript}
          whileHover={{ rotate: 8, scale: 1.08, cursor: "pointer" }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          onClick={() => window.open("https://www.typescriptlang.org/", "_blank")}
        />

        <motion.img
          src="/images/projects/html.png"
          alt="HTML wax stamp"
          style={styles.html}
          whileHover={{ rotate: 15, scale: 1.12, y: -4, cursor: "pointer" }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          onClick={() => window.open("https://developer.mozilla.org/en-US/docs/Web/HTML", "_blank")}
        />

        <motion.img
          src="/images/projects/css.png"
          alt="CSS wax stamp"
          style={styles.css}
          whileHover={{ rotate: 15, scale: 1.12, y: -4, cursor: "pointer" }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          onClick={() => window.open("https://developer.mozilla.org/en-US/docs/Web/CSS", "_blank")}
        />

        <motion.img
          src="/images/projects/yellow-flower.png"
          alt="Yellow flower"
          style={styles.yellowFlower}
          whileHover={{ rotate: 15, scale: 1.12, y: -4 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        />

        <motion.img
          src="/images/projects/toy.png"
          alt="Stuffed animal"
          style={styles.toy}
          whileHover={{ rotate: 15, scale: 1.12, y: -4 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        />

        <motion.div
          style={styles.limePaperContainer}
          whileHover={{ scale: 1.06, }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
          <img
            src="/images/projects/last-paper.png"
            alt="Lime paper"
            style={styles.limePaper}
          />

          <p style={styles.limePaperText}>
            More projects coming soon !!
          </p>
        </motion.div>

        <motion.img
          src="/images/projects/hamster.png"
          alt="Hamster painting"
          style={styles.hamster}
          whileHover={{ rotate: 4, scale: 1.12, y: -4 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        />
      </div>

      <div style={styles2.footerContainer}>
        <footer style={styles2.footer}>
          <p>© {new Date().getFullYear()} Hannah Lee</p>
        </footer>
      </div>
    </ResponsiveCanvas>
  );
}