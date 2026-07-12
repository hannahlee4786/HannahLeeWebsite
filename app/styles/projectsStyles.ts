const styles = {

  mainHeader: {
    height: 130,
    width: 1000,
    marginTop: 10,
    marginBottom: 120,
    position: "relative" as const,
    left: -48,
    overflow: "visible",
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
    height: 4170,
    margin: "0 auto",
  },

  danceCam: {
    position: "absolute" as const,
    top: 0,
    left: -90,
    width: 230,
    zIndex: 10,
    borderRadius: 30,
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
    borderRadius: 30,
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

  mindlogSign: {
    position: "absolute" as const,
    top: 1390,
    left: 50,
    height: 150,
    zIndex: 10,
  },

  tapePaperContainer: {
    position: "absolute" as const,
    left: -270,
    top: 1350,
    transformOrigin: "center center",
  },

  tapePaper: {
    position: "absolute" as const,
    left: 190,
    top: 190,
    height: 500,
  },

  tapePaperText: {
    position: "absolute" as const,
    top: 270,
    left: 250,
    width: 390,
    fontFamily: "Special Elite",
    textAlign: "center" as const,
    lineHeight: 1.7,
    fontSize: "1rem",
  },

  mindlogIcon: {
    position: "absolute" as const,
    top: 1400,
    left: -130,
    width: 130,
    zIndex: 10,
    borderRadius: 30,
    padding: 4,
    backgroundColor: "#000000",
    boxShadow: "0 4px 12px rgba(0,0,0,0.45)",
  },

  mindlogJournal: {
    position: "absolute" as const,
    top: 1730,
    left: 450,
    width: 400,
    zIndex: 10,
  },

  picture2: {
    width: "220px",
  },

  h32: {
    position: "absolute" as const,
    top: 204,
    left: 44,
    fontFamily: "Sophie Comic",
    fontSize: 30
  },

  polaroid3: {
    left: 300,
    top: 1400
  },

  devpost: {
    position: "absolute" as const,
    top: 1550,
    left: 390,
    width: 150,
    zIndex: 10,
    borderRadius: 20,
    cursor: "pointer"
  },

  nextjs: {
    position: "absolute" as const,
    top: 1780,
    left: -145,
    width: 130,
    zIndex: 10,
    transform: "rotate(5deg)",
  },

  mongoDB: {
    position: "absolute" as const,
    top: 1620,
    left: -170,
    width: 150,
    zIndex: 10,
    transform: "rotate(-3deg)",
  },

  python: {
    position: "absolute" as const,
    top: 1950,
    left: -130,
    width: 160,
    zIndex: 10,
    transform: "rotate(-3deg)",
  },

  swift2: {
    position: "absolute" as const,
    top: 1980,
    left: 320,
    width: 120,
    zIndex: 10,
    transform: "rotate(-3deg)",
  },

  mealshareSign: {
    position: "absolute" as const,
    top: 2130,
    left: 100,
    height: 150,
    zIndex: 10,
  },

  github3: {
    position: "absolute" as const,
    top: 2120,
    left: -60,
    width: 150,
    zIndex: 10,
    borderRadius: 20,
    cursor: "pointer"
  },

  picture3: {
    width: "220px",
  },

  h33: {
    position: "absolute" as const,
    top: 240,
    left: 58,
    fontFamily: "Sophie Comic",
    fontSize: 36
  },

  polaroid4: {
    left: 590,
    top: 1860
  },

  mealshareMeals: {
    position: "absolute" as const,
    top: 2290,
    left: -100,
    width: 400,
    zIndex: 10,
  },

  binderPaperContainer2: {
    position: "absolute" as const,
    left: 140,
    top: 2090,
    transformOrigin: "center center",
  },

  binderPaper2: {
    position: "absolute" as const,
    left: 190,
    top: 190,
    height: 300,
  },

  binderPaperText2: {
    position: "absolute" as const,
    top: 240,
    left: 250,
    width: 340,
    fontFamily: "Special Elite",
    fontSize: "1rem",
    lineHeight: 2.4,
    textAlign: "left" as const,
  },

  bluePaperContainer: {
    position: "absolute" as const,
    left: 120,
    top: 2540,
    transformOrigin: "center center",
  },

  bluePaper: {
    position: "absolute" as const,
    left: -160,
    top: 40,
    width: 530,
  },

  bluePaperText: {
    position: "absolute" as const,
    top: 80,
    left: -104,
    width: 430,
    fontFamily: "Special Elite",
    textAlign: "center" as const,
    lineHeight: 2,
    fontSize: "1rem",
  },

  java: {
    position: "absolute" as const,
    top: 2500,
    left: 560,
    width: 200,
    zIndex: 10,
  },

  javascript2: {
    position: "absolute" as const,
    top: 2760,
    left: 480,
    width: 200,
    zIndex: 10,
  },

  springboot: {
    position: "absolute" as const,
    top: 2690,
    left: 670,
    width: 150,
    zIndex: 10,
  },

  fifoSign: {
    position: "absolute" as const,
    top: 2960,
    left: 180,
    height: 150,
    zIndex: 10,
  },

  fifo: {
    position: "absolute" as const,
    top: 3000,
    left: -100,
    width: 230,
    zIndex: 10,
    borderRadius: 30,
    padding: 4,
    backgroundColor: "black",
    boxShadow: "0 4px 12px rgba(0,0,0,0.45)",
  },

  captionContainer2: {
    position: "absolute" as const,
    top: 3060,
    left: 200,
    transformOrigin: "center center",
  },

  caption2: {
    position: "absolute" as const,
    left: 0,
    top: 40,
    height: 120,
  },

  captionText2: {
    position: "absolute" as const,
    top: 56,
    left: 60,
    width: 250,
    fontFamily: "Special Elite",
    textAlign: "center" as const,
    lineHeight: 1.8,
    fontSize: "1rem",
  },

  dog: {
    position: "absolute" as const,
    top: 3050,
    left: 650,
    width: 180,
    zIndex: 10
  },

  calico: {
    position: "absolute" as const,
    top: 2860,
    left: 710,
    width: 120,
    zIndex: 10
  },

  websiteSign: {
    position: "absolute" as const,
    top: 3260,
    left: 60,
    height: 150,
    zIndex: 10,
  },

  github4: {
    position: "absolute" as const,
    top: 3260,
    left: -95,
    width: 150,
    zIndex: 10,
    borderRadius: 20,
    cursor: "pointer"
  },

  pinterest: {
    position: "absolute" as const,
    width: 400,
    zIndex: 10,
    borderRadius: 30,
    backgroundColor: "#a9cff4",
    boxShadow: "0 4px 12px rgba(0,0,0,0.45)",
  },

  h34: {
    position: "absolute" as const,
    top: 256,
    left: 100,
    fontFamily: "Sophie Comic",
    fontSize: 25,
    zIndex: 20,
    width: 400
  },

  pinterestContainer: {
    position: "absolute" as const,
    top: 3420,
    left: -30,
    transformOrigin: "center center",
  },

  whitePostItContainer: {
    position: "absolute" as const,
    left: 550,
    top: 3350,
    transformOrigin: "center center",
  },

  whitePostIt: {
    position: "absolute" as const,
    left: -160,
    top: 40,
    width: 410,
  },

  whitePostItText: {
    position: "absolute" as const,
    top: 80,
    left: -104,
    width: 300,
    fontFamily: "Special Elite",
    textAlign: "center" as const,
    lineHeight: 2,
    fontSize: "0.92rem",
  },

  nextjs2: {
    position: "absolute" as const,
    top: 3760,
    left: -10,
    width: 150,
    zIndex: 10,
  },

  typescript: {
    position: "absolute" as const,
    top: 3740,
    left: 140,
    width: 160,
    zIndex: 10,
  },

  html: {
    position: "absolute" as const,
    top: 3770,
    left: 290,
    width: 160,
    zIndex: 10,
  },

  css: {
    position: "absolute" as const,
    top: 3770,
    left: 450,
    width: 150,
    zIndex: 10,
  },

  yellowFlower: {
    position: "absolute" as const,
    top: 3220,
    left: 530,
    width: 180,
    zIndex: 10,
  },

  toy: {
    position: "absolute" as const,
    top: 3840,
    left: 600,
    width: 180,
    zIndex: 10,
  },

  limePaperContainer: {
    position: "absolute" as const,
    left: 360,
    top: 3900,
    transformOrigin: "center center",
  },

  limePaper: {
    position: "absolute" as const,
    left: -160,
    top: 40,
    width: 410,
  },

  limePaperText: {
    position: "absolute" as const,
    top: 80,
    left: -60,
    width: 200,
    fontFamily: "Special Elite",
    textAlign: "center" as const,
    lineHeight: 2,
    fontSize: "1.5rem",
  },

  hamster: {
    position: "absolute" as const,
    top: 3940,
    left: -5,
    width: 180,
    zIndex: 10,
  },

}

export default styles;