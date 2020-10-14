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
    color: "#FFF",
    paddingVertical: 20,
  },
  questionGroup: {
    marginVertical: 10,
  },
  buttonsGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonGreen: {
    backgroundColor: "#32CD32",
    padding: 20,
  },
  buttonText: {
    color: "#FFF",
  },
  buttonRed: {
    backgroundColor: "#ff0000",
    padding: 20,
  },
});

export default styles;
