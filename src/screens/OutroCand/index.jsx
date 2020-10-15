import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Video } from "expo-av";

import styles from "./style";
import { RectButton } from "react-native-gesture-handler";

function OutroCand() {
  const { navigate } = useNavigation();

  const handleFinal = async () => {
    navigate("Final");
  };

  return (
    <View style={styles.container}>
      <Video
        source={require("../../assets/video/video_despedida_kiko.mp4")}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        useNativeControls
        style={styles.video}
      />
      <RectButton style={styles.startQuestionnarie} onPress={handleFinal}>
        <Text style={styles.startQuestionnarieText}>Finalizar</Text>
      </RectButton>
    </View>
  );
}

export default OutroCand;
