const styles = {

  mainHeader: {
    height: 130,
    width: 1000,
    marginTop: 40,
    marginBottom: 20,
    position: "relative" as const,
    left: -48,
    overflow: "visible",
  },

  star1: {
    height: 70,
    position: "absolute" as const,
    top: 14,
    left: -10,
  },

  e1: {
    height: 70,
    position: "absolute" as const,
    top: 44,
    left: 75,
  },

  x: {
    height: 70,
    position: "absolute" as const,
    top: 14,
    left: 160,
  },

  p: {
    height: 70,
    position: "absolute" as const,
    top: 44,
    left: 245,
  },

  e2: {
    height: 70,
    position: "absolute" as const,
    top: 16,
    left: 335,
  },

  r: {
    height: 70,
    position: "absolute" as const,
    top: 40,
    left: 425,
  },

  i: {
    height: 70,
    position: "absolute" as const,
    top: 18,
    left: 518,
  },

  e3: {
    height: 70,
    position: "absolute" as const,
    top: 40,
    left: 610,
  },

  n: {
    height: 70,
    position: "absolute" as const,
    top: 19,
    left: 700,
  },

  c: {
    height: 70,
    position: "absolute" as const,
    top: 40,
    left: 795,
  },

  e4: {
    height: 70,
    position: "absolute" as const,
    top: 20,
    left: 888,
  },

  star2: {
    height: 70,
    position: "absolute" as const,
    top: 40,
    left: 970,
  },

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
    left: 230,
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

  dinosaur: {
    position: "absolute" as const,
    top: 180,
    left: 710,
    width: 180,
    zIndex: 10,
    transform: "rotate(5deg)",
  },

  cookie: {
    position: "absolute" as const,
    top: 20,
    left: 750,
    width: 140,
    zIndex: 10,
    transform: "rotate(5deg)",
  },

  graphPaperContainer: {
    position: "absolute" as const,
    left: 100,
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
    left: 640,
    width: 260,
    zIndex: 10,
    transform: "rotate(-3deg)",
  },

  typescript: {
    position: "absolute" as const,
    top: 200,
    left: 470,
    width: 230,
    zIndex: 10,
    transform: "rotate(5deg)",
  },

  pinkBow: {
    position: "absolute" as const,
    top: 30,
    left: 480,
    width: 170,
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
    left: -120,
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
    height: 2380,
    // backgroundColor: "white",
    margin: "0 auto",
  },

  pinkPaperContainer: {
    position: "absolute" as const,
    left: -70,
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
    left: -120,
    width: 200,
    zIndex: 10,
    transform: "rotate(-3deg)",
  },

  makersGroup: {
    position: "absolute" as const,
    top: 20,
    left: 410,
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
    left: 540,
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

  danceCamCard: {
    position: "absolute" as const,
    top: 680,
    left: -180,
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: 12,
    cursor: "pointer",
    padding: 10,
    backgroundColor: "#629de4"
  },

  danceCamApp: {
    width: 450,
    display: "block",
  },

  danceCamText: {
    position: "absolute" as const,
    top: 268,
    left: 300,
    fontFamily: "Sophie Comic",
    fontSize: 27,
    width: 120,
    color: "#FFFFFF",
    lineHeight: 0.8,
    textAlign: "center" as const
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
    left: 340,
    width: 200,
    zIndex: 10,
  },

  swiftui: {
    position: "absolute" as const,
    top: 1280,
    left: 460,
    width: 170,
    zIndex: 10,
    transform: "rotate(-3deg)",
  },

  btsContainer: {
    position: "absolute" as const,
    top: 960,
    left: 340,
    transformOrigin: "center center",
  },

  bts: {
    position: "static" as const,
    fontFamily: "Sophie Comic",
    fontSize: 24,
    width: 260,
    backgroundColor: "#eee1a0",
    color: "#ec9326",
    padding: 12,
    textAlign: "center" as const,
    borderRadius: 20,
  },

  pinkTicket: {
    width: 320,
    position: "absolute" as const,
    top: -30,
    left: -110,
  },

  pinkTicketContainer: {
    position: "absolute" as const,
    left: -20,
    top: 1530,
    transformOrigin: "center center",
  },

  h43: {
    position: "absolute" as const,
    top: 24,
    left: -44,
    margin: 0,
    fontFamily: "Sophie Comic",
    fontSize: 34,
    textAlign: "center" as const,
    width: 190
  },

  purplePaperContainer: {
    position: "absolute" as const,
    left: 180,
    top: 1440,
    transformOrigin: "center center",
  },

  purplePaper: {
    position: "absolute" as const,
    left: 0,
    top: 40,
    height: 430,
  },

  purplePaperText: {
    position: "absolute" as const,
    top: 125,
    left: 88,
    width: 520,
    fontFamily: "Special Elite",
    textAlign: "center" as const,
    lineHeight: 1.8,
    fontSize: "1rem",
  },

  fifoFridge: {
    position: "absolute" as const,
    top: 680,
    left: -150,
    width: 300,
    zIndex: 10,
    padding: 8,
    backgroundColor: "#6383d2",
    filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.45))",
    cursor: "pointer"
  },

  polaroid4: {
    left: -185,
    top: 1570,
  },

  h34: {
    position: "absolute" as const,
    top: 275,
    left: 24,
    fontFamily: "Sophie Comic",
    fontSize: 24
  },

  github2: {
    position: "absolute" as const,
    top: 1690,
    left: -200,
    width: 180,
    zIndex: 10,
    borderRadius: 20,
    cursor: "pointer"
  },

  bluePaperContainer: {
    position: "absolute" as const,
    left: -160,
    top: 2030,
    transformOrigin: "center center",
  },

  bluePaper: {
    position: "absolute" as const,
    left: 0,
    top: 40,
    height: 270,
  },

  bluePaperText: {
    position: "absolute" as const,
    top: 94,
    left: 60,
    width: 640,
    fontFamily: "Special Elite",
    textAlign: "center" as const,
    lineHeight: 1.85,
    fontSize: "1rem",
  },

  polaroid5: {
    left: 230,
    top: 1800,
  },

  h35: {
    position: "absolute" as const,
    top: 264,
    left: 40,
    fontFamily: "Sophie Comic",
    fontSize: 36
  },

  typescript2: {
    position: "absolute" as const,
    top: 1890,
    left: 220,
    width: 210,
    zIndex: 10,
    transform: "rotate(-3deg)",
  },

  reactNative: {
    position: "absolute" as const,
    top: 1880,
    left: 410,
    width: 190,
    zIndex: 10,
    transform: "rotate(5deg)",
  },

  firebase: {
    position: "absolute" as const,
    top: 1870,
    left: -230,
    width: 210,
    zIndex: 10,
    transform: "rotate(-3deg)",
  },

  capybara: {
    position: "absolute" as const,
    top: 2270,
    left: 520,
    width: 100,
    zIndex: 10,
  },

  footerContainer: {
    display: "flex",
    justifyContent: "center",
    // backgroundColor: "white",
    marginTop: 100,
  },

  footer: {
    fontFamily: "Special Elite",
    fontSize: 24,
    color: "#1e0a44",
    fontWeight: "bold",
  },

}

export default styles;