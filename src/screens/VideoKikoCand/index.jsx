import React from "react";
import { View, Dimensions, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Video } from "expo-av";

import styles from "./style";
import { RectButton } from "react-native-gesture-handler";

function VideoKikoCand() {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Video
        source={require("../../assets/video/uau_video_3.mp4")}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        useNativeControls
        style={styles.video}
      />
      <RectButton>
        <Text></Text>
      </RectButton>
    </View>
  );
}

export default VideoKikoCand;
