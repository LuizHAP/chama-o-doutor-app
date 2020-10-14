import React, { useState, useContext } from "react";
import {
  Text,
  KeyboardAvoidingView,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { UserContext } from "../../contexts/UserContext";

import styles from "./style";

function Questionnarie() {
  const { navigate } = useNavigation();
  const [nomeColaborador, setNomeColaborador] = useState("");

  const { dispatch } = useContext(UserContext);

  const handleSubmitForm = () => {
    dispatch({
      type: "ADD_USER",
      payload: { nomeColaborador: nomeColaborador },
    });
    navigate("Inicial");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={styles.container}
    >
      <View style={styles.questionnarieForm}>
        <Text style={styles.label}>Nome do Colaborador</Text>
        <TextInput
          style={styles.input}
          value={nomeColaborador}
          onChangeText={(text) => setNomeColaborador(text)}
          autoCorrect={false}
          autoCapitalize="none"
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmitForm}
        >
          <Text style={styles.submitButtonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

export default Questionnarie;
