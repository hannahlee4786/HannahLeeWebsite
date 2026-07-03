const styles = {
  experienceHeader: {
    marginTop: 50,
    height: 140,
    // backgroundColor: "white"
  },

  experience1Container: {
    position: "relative" as const,
    width: 600,
    height: 700,
    // backgroundColor: "white",
    margin: "0 auto",
  },

  polaroid: {
    position: "relative" as const,
    backgroundColor: "#F0F0F0",
    padding: "16px 16px 50px 16px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.45)",
    display: "inline-block",
    borderRadius: 2,
  },

  polaroid2: {
    left: 240,
    top: 80,
  },

  picture: {
    width: "180px",
    display: "block",
  },

  h31: {
    position: "absolute" as const,
    top: 204,
    left: 22,
    fontFamily: "Sophie Comic",
    fontSize: 36
  },

  graphPaperContainer: {
    position: "absolute" as const,
    left: 120,
    top: 370,
    transformOrigin: "center center",
  },

  graphPaper: {
    position: "absolute" as const,
    left: 0,
    top: 40,
    height: 290,
  },

  graphPaperText: {
    position: "absolute" as const,
    top: 114,
    left: 54,
    width: 700,
    fontFamily: "Special Elite",
    textAlign: "center" as const,
    lineHeight: 1.8,
    fontSize: "1rem",
  },

  yellowPostItContainer: {
    position: "absolute" as const,
    left: -230,
    top: 0,
    transformOrigin: "center center",
  },

  yellowPostIt: {
    position: "absolute" as const,
    left: -160,
    top: 40,
    width: 430,
  },

  yellowPostItText: {
    position: "absolute" as const,
    top: 84,
    left: 60,
    width: 300,
    fontFamily: "Special Elite",
    textAlign: "center" as const,
    lineHeight: 2,
    fontSize: "1rem",
  },

  aws: {
    position: "absolute" as const,
    top: 60,
    left: 600,
    width: 200,
    zIndex: 10,
    transform: "rotate(-3deg)",
  },

  typescript: {
    position: "absolute" as const,
    top: 220,
    left: 480,
    width: 200,
    zIndex: 10,
    transform: "rotate(5deg)",
  },

  blueTicket: {
    width: 320,
    position: "absolute" as const,
    top: -30,
    left: -110,
  },

  blueTicketContainer: {
    position: "absolute" as const,
    left: -100,
    top: 480,
    transformOrigin: "center center",
  },

  h41: {
    position: "absolute" as const,
    top: 24,
    left: -44,
    margin: 0,
    fontFamily: "Sophie Comic",
    fontSize: 34,
    textAlign: "center" as const,
    width: 190
  },

  experience2Container: {
    position: "relative" as const,
    width: 600,
    height: 700,
    // backgroundColor: "white",
    margin: "0 auto",
  },

  pinkPaperContainer: {
    position: "absolute" as const,
    left: -10,
    top: 0,
    transformOrigin: "center center",
  },

  pinkPaper: {
    position: "absolute" as const,
    left: -160,
    top: 40,
    width: 600,
  },

  pinkPaperText: {
    position: "absolute" as const,
    top: 114,
    left: -110,
    width: 500,
    fontFamily: "Special Elite",
    textAlign: "center" as const,
    lineHeight: 2,
    fontSize: "1rem",
  },

  makersLogo: {
    position: "absolute" as const,
    top: -70,
    left: -80,
    width: 200,
    zIndex: 10,
    transform: "rotate(-3deg)",
  },

  makersGroup: {
    position: "absolute" as const,
    top: 20,
    left: 450,
    width: 280,
    transformOrigin: "center center",
  },

  makers: {
    width: 280,
    backgroundColor: "#F0F0F0",
    padding: "16px 16px 50px 16px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.45)",
    display: "block",
    borderRadius: 2,
  },

  h32: {
    position: "absolute" as const,
    top: 176,
    left: 100,
    fontFamily: "Sophie Comic",
    fontSize: 36
  },

  greenPostItContainer: {
    position: "absolute" as const,
    left: 580,
    top: 240,
    transformOrigin: "center center",
  },

  greenPostIt: {
    position: "absolute" as const,
    left: -170,
    top: 40,
    width: 520,
  },

  greenPostItText: {
    position: "absolute" as const,
    top: 82,
    left: -90,
    width: 360,
    fontFamily: "Special Elite",
    textAlign: "center" as const,
    lineHeight: 1.9,
    fontSize: "1rem",
  },

  orangeTicket: {
    width: 400,
    position: "absolute" as const,
    top: -30,
    left: -110,
  },

  orangeTicketContainer: {
    position: "absolute" as const,
    left: -100,
    top: 480,
    transformOrigin: "center center",
  },

  h42: {
    position: "absolute" as const,
    top: 40,
    left: -8,
    margin: 0,
    fontFamily: "Sophie Comic",
    fontSize: 36,
    textAlign: "center" as const,
    width: 200
  },

  binderPaperContainer: {
    position: "absolute" as const,
    left: 130,
    top: 390,
    transformOrigin: "center center",
  },

  binderPaper: {
    position: "absolute" as const,
    left: 190,
    top: 190,
    height: 360,
  },

  binderPaperText: {
    position: "absolute" as const,
    top: 240,
    left: 288,
    width: 430,
    fontFamily: "Special Elite",
    textAlign: "center" as const,
    lineHeight: 2.03,
    fontSize: "1rem",
  },

  github1: {
    position: "absolute" as const,
    top: 470,
    left: 200,
    width: 180,
    zIndex: 10,
    borderRadius: 20,
    cursor: "pointer"
  },

  danceCam: {
    position: "absolute" as const,
    top: 210,
    left: 390,
    margin: 0,
    fontFamily: "Sophie Comic",
    fontSize: 50,
    textAlign: "center" as const,
    width: 200,
    zIndex: 20,
  },

  danceCamApp: {
    position: "absolute" as const,
    top: 680,
    left: -150,
    width: 420,
    zIndex: 10,
    padding: 8,
    backgroundColor: "#6383d2",
    filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.45))",
    cursor: "pointer"
  },

  greenYellowPaperContainer: {
    position: "absolute" as const,
    left: -360,
    top: 800,
    transformOrigin: "center center",
  },

  greenYellowPaper: {
    position: "absolute" as const,
    left: 190,
    top: 180,
    height: 550,
    transform: "rotate(90deg)",
  },

  greenYellowPaperText: {
    position: "absolute" as const,
    top: 280,
    left: 280,
    width: 370,
    fontFamily: "Special Elite",
    textAlign: "center" as const,
    lineHeight: 2.03,
    fontSize: "1rem",
  },

  polaroid3: {
    left: 660,
    top: 980,
  },

  picture2: {
    width: "140px",
    display: "block",
  },

  h33: {
    position: "absolute" as const,
    top: 394,
    left: 40,
    fontFamily: "Sophie Comic",
    fontSize: 36
  },

  swift: {
    position: "absolute" as const,
    top: 1080,
    left: 360,
    width: 200,
    zIndex: 10,
  },

  swiftui: {
    position: "absolute" as const,
    top: 1300,
    left: 450,
    width: 170,
    zIndex: 10,
    transform: "rotate(-3deg)",
  },

  btsContainer: {
    position: "absolute" as const,
    top: 970,
    left: 340,
    transformOrigin: "center center",
  },

  bts: {
    position: "static" as const,
    fontFamily: "Sophie Comic",
    fontSize: 24,
    width: 260,
    backgroundColor: "#663399",
    color: "#deccef",
    padding: 12,
    textAlign: "center" as const,
    borderRadius: 20
  } 

}

export default styles;