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

function Questionario() {
  const { navigate } = useNavigation();
  const [nomeColaborador, setNomeColaborador] = useState("");

  const { dispatch } = useContext(UserContext);

  const handleSubmitForm = () => {
    if (nomeColaborador) {
      dispatch({
        type: "ADD_USER",
        payload: { nomeColaborador: nomeColaborador },
      });
      navigate("00-Inicial");
    } else {
      alert("Você deve preencher o nome do Colaborador");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome do Colaborador</Text>
      <TextInput
        style={styles.input}
        value={nomeColaborador}
        onChangeText={(text) => setNomeColaborador(text)}
        autoCorrect={false}
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmitForm}>
        <Text style={styles.submitButtonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Questionario;
