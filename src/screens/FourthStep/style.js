import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
  questionText: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
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
  buttonRed: {
    backgroundColor: "#ff0000",
    padding: 20,
  },
});

export default styles;
