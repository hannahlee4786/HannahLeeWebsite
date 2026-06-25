const styles = {
  main: {
    width: "fit-content",
    margin: "0 auto",
  },

  mainHeader: {
    height: 180,
    marginTop: 40,
    marginBottom: 50,
    position: "relative" as const,
    left: -44,
    // backgroundColor: "aliceblue"
  },

  polaroidContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "20px",
    // backgroundColor: "pink"
  },

  polaroid: {
    position: "relative" as const,
    backgroundColor: "#F0F0F0",
    padding: "16px 16px 50px 16px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.45)",
    display: "inline-block",
    borderRadius: 2,
  },
  
  ribbon: {
    position: "absolute" as const,
    top: -24,
    left: -36,
    width: 130,
    zIndex: 10,
    transform: "rotate(-18deg)",
  },
  
  picture: {
    width: "180px",
    display: "block",
  },

  h31: {
    position: "absolute" as const,
    top: 220,
    left: 60,
    fontFamily: "Sophie Comic",
    fontSize: 40
  },

  h32: {
    position: "absolute" as const,
    top: 240,
    left: 64,
    fontFamily: "Sophie Comic",
    fontSize: 36
  },

  h33: {
    position: "absolute" as const,
    top: 230,
    left: 70,
    fontFamily: "Sophie Comic",
    fontSize: 36
  },

  h34: {
    position: "absolute" as const,
    top: 238,
    left: 54,
    fontFamily: "Sophie Comic",
    fontSize: 36
  },

  usc: {
    zIndex: 30,
    position: "absolute" as const,
    top: -50,
    left: -30,
    width: 160,
  },

  flower: {
    zIndex: 30,
    position: "absolute" as const,
    top: 50,
    left: 590,
    width: 160,
  }, 

  receipt: {
    position: "absolute" as const,
    left: -90,
    top: 240,
    height: 480,
    zIndex: 20,
    padding: 8,
    backgroundColor: "#ed8d3e",
    filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.45))",
  },

  introContainer: {
    position: "relative" as const,
    display: "inline-block",
    marginLeft: 30,
    marginBottom: 30
  },
  
  introPaper: {
    width: 700,
    display: "block",
    filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.45))",
  },

  introText: {
    position: "absolute" as const,
    fontFamily: "Special Elite",
    top: 76,
    left: 76,
    width: 560,
    marginTop: 30,
    textAlign: "center" as const,
  },
  
  introHeading: {
    margin: 0,
    marginBottom: 16,
    fontSize: "2rem",
  },
  
  introParagraph: {
    margin: 0,
    lineHeight: 1.8,
    fontSize: "1.1rem",
  },
  
  star: {
    position: "absolute" as const,
    bottom: -10,
    right: 50,
    width: 120,
    zIndex: 10,
    transform: "rotate(-14deg)",
  },

  pinkTape: {
    position: "absolute" as const,
    top: -36,
    left: 200,
    width: 300,
    zIndex: 10,
  },

  heartContainer: {
    position: "relative" as const,
    width: 600,
    height: 700,
    // backgroundColor: "white"
  },

  heart: {
    zIndex: 20,
    position: "absolute" as const,
    left: 200,
    top: 620,
    width: 430,
  },

  purpleTape: {
    position: "absolute" as const,
    top: 60,
    left: 260,
    width: 200,
    zIndex: 10,
  },

  morePaper: {
    position: "absolute" as const,
    width: 400,
    top: 70,
    left: 126,
    filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.45))",
  },
  
  moreText: {
    position: "absolute" as const,
    top: 146,
    left: 220,
    width: 240,
    fontFamily: "Special Elite",
    textAlign: 'center' as const,
  },

  moreParagraph: {
    margin: 0,
    lineHeight: 2.35,
    fontSize: "1.1rem",
    color: "black"
  },

  polaroidsContainer: {
    // backgroundColor: "pink",
    position: "relative" as const,
    top: -50,
    left: 40
  }, 

  polaroid2: {
    right: -500,
    top: 36,
  },

  polaroid3: {
    right: -540,
    top: 150,
  },

  matcha: {
    position: "absolute" as const,
    top: -80,
    left: -160,
    width: 130,
    zIndex: 10,
  },

  polaroid4: {
    right: -600,
    top: 60,
  },

  record: {
    position: "absolute" as const,
    width: 260,
    bottom: -70,
    left: 360,
    zIndex: 10,
    transform: "rotate(-45deg)",
  }
};

export default styles;