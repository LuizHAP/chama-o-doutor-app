import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Video } from "expo-av";

import styles from "./style";
import { RectButton } from "react-native-gesture-handler";

function Nivaldo() {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Video
        source={require("../../assets/video/video_nivaldo.mp4")}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        useNativeControls
        style={styles.video}
      />
      <RectButton style={styles.startQuestionnarie} onPress={handlePreload}>
        <Text style={styles.startQuestionnarieText}>Finalizar</Text>
      </RectButton>
    </View>
  );
}

export default Nivaldo;
