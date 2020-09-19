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
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  const { dispatch } = useContext(UserContext);

  const handleSubmitForm = () => {
    dispatch({
      type: "ADD_USER",
      payload: { name: name, lastname: lastname, email: email },
    });
    navigate("FirstStep");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={styles.container}
    >
      <View style={styles.questionnarieForm}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <Text style={styles.label}>Sobrenome</Text>
        <TextInput
          style={styles.input}
          value={lastname}
          onChangeText={(text) => setLastname(text)}
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
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
