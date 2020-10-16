import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Video } from "expo-av";

import styles from "./style";
import { RectButton } from "react-native-gesture-handler";

function VideoKikoCand() {
  const { navigate } = useNavigation();

  const handleFinal = async () => {
    navigate("Final");
  };

  return (
    <View style={styles.container}>
      <Video
        source={require("../../assets/video/kiko_nivaldo_lorena.mp4")}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        style={styles.video}
        useNativeControls
      />
      <RectButton style={styles.startQuestionnarie} onPress={handleFinal}>
        <Text style={styles.startQuestionnarieText}>Continuar</Text>
      </RectButton>
    </View>
  );
}

export default VideoKikoCand;
