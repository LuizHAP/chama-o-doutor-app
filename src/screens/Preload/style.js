import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E26B2A",
    justifyContent: "center",
    alignItems: "center",
  },

  banner: {
    width: "90%",
    resizeMode: "contain", //Redimencione a imagem e conteúdo visível
  },

  startQuestionnarie: {
    backgroundColor: "#333",
    borderRadius: 8,
    padding: 24,
    margin: 5,
  },

  startQuestionnarieText: {
    color: "#FFF",
    fontSize: 20,
  },
});

export default styles;
