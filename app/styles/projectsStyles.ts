const styles = {

  mainHeader: {
    height: 130,
    width: 1000,
    marginTop: 40,
    marginBottom: 120,
    position: "relative" as const,
    left: -48,
    overflow: "visible",
    // backgroundColor: "white"
  },

  p: {
    height: 130,
    position: "absolute" as const,
    top: 44,
    left: 100,
  },

  r: {
    height: 105,
    position: "absolute" as const,
    top: 14,
    left: 215,
  },

  o: {
    height: 105,
    position: "absolute" as const,
    top: 44,
    left: 295,
  },

  j: {
    height: 150,
    position: "absolute" as const,
    top: 16,
    left: 390,
  },

  e: {
    height: 110,
    position: "absolute" as const,
    top: 40,
    left: 475,
  },

  c: {
    height: 110,
    position: "absolute" as const,
    top: 18,
    left: 575,
  },

  t: {
    height: 120,
    position: "absolute" as const,
    top: 40,
    left: 675,
  },

  s: {
    height: 110,
    position: "absolute" as const,
    top: 19,
    left: 765,
  },

  projectsContainer: {
    position: "relative" as const,
    width: 600,
    height: 1900,
    // backgroundColor: "white",
    margin: "0 auto",
  },

  danceCam: {
    position: "absolute" as const,
    top: 0,
    left: -90,
    width: 230,
    zIndex: 10,
    borderRadius: 16,
    padding: 4,
    backgroundColor: "black",
    boxShadow: "0 4px 12px rgba(0,0,0,0.45)",
  },

  danceCamSign: {
    position: "absolute" as const,
    top: -40,
    left: 180,
    height: 150,
    zIndex: 10,
  },

  captionContainer: {
    position: "absolute" as const,
    top: 60,
    left: 200,
    transformOrigin: "center center",
  },

  caption: {
    position: "absolute" as const,
    left: 0,
    top: 40,
    height: 120,
  },

  captionText: {
    position: "absolute" as const,
    top: 56,
    left: 60,
    width: 250,
    fontFamily: "Special Elite",
    textAlign: "center" as const,
    lineHeight: 1.8,
    fontSize: "1rem",
  },

  hippo: {
    position: "absolute" as const,
    top: -70,
    left: 650,
    width: 150,
    zIndex: 10
  },

  eightBall: {
    position: "absolute" as const,
    top: 80,
    left: 640,
    width: 170,
    zIndex: 10
  },

  lebronSign: {
    position: "absolute" as const,
    top: 240,
    left: 30,
    height: 180,
    zIndex: 10,
  },

  lebronApp: {
    position: "absolute" as const,
    top: 380,
    left: 480,
    height: 400,
    zIndex: 10,
  },

  binderPaperContainer: {
    position: "absolute" as const,
    left: -200,
    top: 214,
    transformOrigin: "center center",
  },

  binderPaper: {
    position: "absolute" as const,
    left: 190,
    top: 190,
    height: 300,
    boxShadow: "0 4px 12px rgba(0,0,0,0.45)",
  },

  binderPaperText: {
    position: "absolute" as const,
    top: 204,
    left: 270,
    width: 340,
    fontFamily: "Special Elite",
    textAlign: "center" as const,
    lineHeight: 1.7,
    fontSize: "1rem",
  },

  firebase: {
    position: "absolute" as const,
    top: 280,
    left: -110,
    width: 130,
    zIndex: 10,
    transform: "rotate(5deg)",
  },

  reactNative: {
    position: "absolute" as const,
    top: 620,
    left: -90,
    width: 150,
    zIndex: 10,
    transform: "rotate(-3deg)",
  },

  javascript: {
    position: "absolute" as const,
    top: 430,
    left: -140,
    width: 180,
    zIndex: 10,
    transform: "rotate(-3deg)",
  },

  github1: {
    position: "absolute" as const,
    top: 230,
    left: 450,
    width: 150,
    zIndex: 10,
    borderRadius: 20,
    cursor: "pointer"
  },

  moodifySign: {
    position: "absolute" as const,
    top: 790,
    left: 50,
    height: 150,
    zIndex: 10,
  },

  moodifySearch: {
    position: "absolute" as const,
    top: 840,
    left: -180,
    height: 400,
    zIndex: 10,
  },

  moodifyContainer: {
    position: "absolute" as const,
    left: -170,
    top: 730,
    transformOrigin: "center center",
  },
  
  moodifyPaper: {
    position: "absolute" as const,
    left: 190,
    top: 190,
    height: 400,
  },

  moodifyText: {
    position: "absolute" as const,
    fontFamily: "Special Elite",
    top: 250,
    left: 230,
    width: 470,
    marginTop: 30,
    textAlign: "center" as const,
  },
  
  moodifyParagraph: {
    margin: 0,
    lineHeight: 1.8,
    fontSize: "1.05rem",
  },

  moodifyIcon: {
    position: "absolute" as const,
    top: 800,
    left: 530,
    width: 130,
    zIndex: 10,
    borderRadius: 16,
    padding: 4,
    backgroundColor: "black",
    boxShadow: "0 4px 12px rgba(0,0,0,0.45)",
  },

  polaroid: {
    position: "relative" as const,
    backgroundColor: "#F0F0F0",
    padding: "16px 16px 50px 16px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.45)",
    display: "inline-block",
    borderRadius: 2,
  },

  picture: {
    width: "220px",
    display: "block",
  },

  h31: {
    position: "absolute" as const,
    top: 164,
    left: 54,
    fontFamily: "Sophie Comic",
    fontSize: 36
  },

  polaroid2: {
    left: 572,
    top: 960
  },

  swift: {
    position: "absolute" as const,
    top: 1204,
    left: 20,
    width: 150,
    zIndex: 10,
  },

  swiftui: {
    position: "absolute" as const,
    top: 1230,
    left: 180,
    width: 130,
    zIndex: 10,
  },

  firebase2: {
    position: "absolute" as const,
    top: 1200,
    left: 420,
    width: 170,
    zIndex: 10,
  },

  github2: {
    position: "absolute" as const,
    top: 1210,
    left: 590,
    width: 150,
    zIndex: 10,
    borderRadius: 20,
    cursor: "pointer"
  },
}

export default styles;