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
    left: 280,
    top: 30,
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

  greenPostItContainer: {
    position: "absolute" as const,
    left: 190,
    top: 320,
    transformOrigin: "center center",
  },

  greenPostIt: {
    position: "absolute" as const,
    left: 190,
    top: 320,
    height: 420,
  },

  greenPostItText: {
    position: "absolute" as const,
    top: 80,
    left: 120,
    width: 500,
    fontFamily: "Special Elite",
    textAlign: "center" as const,
    lineHeight: 1.8,
    fontSize: "1rem",
  },

  yellowPostItContainer: {
    position: "absolute" as const,
    left: -160,
    top: 40,
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
    top: 100,
    left: 60,
    width: 300,
    fontFamily: "Special Elite",
    textAlign: "center" as const,
    lineHeight: 1.8,
    fontSize: "1rem",
  },

  aws: {
    position: "absolute" as const,
    top: 50,
    left: 620,
    width: 200,
    zIndex: 10,
    transform: "rotate(-3deg)",
  },

  typescript: {
    position: "absolute" as const,
    top: 180,
    left: 500,
    width: 200,
    zIndex: 10,
    transform: "rotate(5deg)",
  },

  blueTicket: {
    width: 300,
    position: "absolute" as const,
    top: 480,
    left: -100,
  },

  h41: {
    position: "absolute" as const,
    top: 70,
    left: 96,
    margin: 0,
    fontFamily: "Sophie Comic",
    fontSize: 36,
  }
}

export default styles;