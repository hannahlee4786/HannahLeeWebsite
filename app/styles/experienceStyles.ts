const styles = {
  experienceHeader: {
    marginTop: 50,
    height: 140,
    // backgroundColor: "white"
  },

  experienceContainer: {
    position: "relative" as const,
    width: 600,
    height: 700,
  },

  paper1Container: {
    position: "relative" as const,
    left: -100,
  }, 

  paper1: {
    width: 1000,
    display: "block",
    filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.15))",
    transform: "rotate(-3deg)",
  },

  paper1Text: {
    position: "absolute" as const,
    fontFamily: "Special Elite",
    top: 116,
    left: 54,
    width: 900,
    marginTop: 30,
    transform: "rotate(-3deg)",
    margin: 0,
    lineHeight: 1.8,
    fontSize: "1rem",
  },

  illoominate: {
    position: "absolute" as const,
    top: -170,
    left: -90,
    width: 300,
    zIndex: 10,
    transform: "rotate(-8deg)",
  },

  aws: {
    position: "absolute" as const,
    top: 260,
    right: -370,
    width: 130,
    zIndex: 10,
    transform: "rotate(-3deg)",
  },

  typescript: {
    position: "absolute" as const,
    top: 180,
    right: -455,
    width: 130,
    zIndex: 10,
    transform: "rotate(5deg)",
  }
}

export default styles;