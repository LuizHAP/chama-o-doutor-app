import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E26B2A",
    justifyContent: "center",
    alignItems: "center",
  },
  questionText: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    paddingVertical: 20,
    color: "#FFF",
  },
  questionGroup: {
    marginVertical: 10,
  },
  buttonsGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonText: {
    color: "#FFF",
  },
  buttonGreen: {
    backgroundColor: "#32CD32",
    padding: 20,
  },
  buttonRed: {
    backgroundColor: "#ff0000",
    padding: 20,
  },
});

export default styles;
