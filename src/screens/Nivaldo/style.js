import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E26B2A",
    paddingTop: 100,
    alignItems: "center",
  },
  video: {
    width: width,
    height: height / 1.5,
  },
  startQuestionnarie: {
    backgroundColor: "#333",
    borderRadius: 8,
    padding: 24,
    marginTop: 15,
  },

  startQuestionnarieText: {
    color: "#FFF",
    fontSize: 20,
  },
});

export default styles;
