import React, {useContext} from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import { UserContext } from "../../contexts/UserContext";

import styles from "./style";

const UploadData = (props) => {
  const { navigate } = useNavigation();

  const { state } = useContext(UserContext);

  const handleUploadData = () => {
    console.log(state);
  };

  return (
    <View style={styles.container}>
      <RectButton style={styles.startQuestionnarie} onPress={handleUploadData}>
        <Text style={styles.startQuestionnarieText}>Upload</Text>
      </RectButton>
    </View>
  );
};

export default UploadData;
