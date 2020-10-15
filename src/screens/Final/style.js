import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E26B2A",
    justifyContent: "center",
    alignItems: "center",
  },

  banner: {
    width: "100%",
    resizeMode: "contain", //Redimencione a imagem e conteúdo visível
  },

  textFinal: {
    color: "#FFF",
    fontSize: 20,
    marginTop: 30,
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
