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
    height: 700,
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
    left: 640,
    width: 150,
    zIndex: 10
  },

  eightBall: {
    position: "absolute" as const,
    top: 80,
    left: 640,
    width: 140,
    zIndex: 10
  },


}

export default styles;