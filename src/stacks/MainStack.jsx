import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Preload from "../screens/Preload";
import UploadData from "../screens/UploadData";
import Questionnarie from "../screens/Questionnarie";
import FirstStep from "../screens/FirstStep";
import SecondStep from "../screens/SecondStep";
import ThirdStep from "../screens/ThirdStep";
import VideoKikoCand from "../screens/VideoKikoCand";
import Final from "../screens/Final";

const { Navigator, Screen } = createStackNavigator();

export default function MainStack() {
  return (
    <Navigator
      initialRouteName="Questionnarie"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="Questionnarie" component={Questionnarie} />
      <Screen name="Inicial" component={Preload} />
      <Screen name="UploadData" component={UploadData} />
      <Screen name="FirstStep" component={FirstStep} />
      <Screen name="SecondStep" component={SecondStep} />
      <Screen name="ThirdStep" component={ThirdStep} />
      <Screen name="VideoKikoCand" component={VideoKikoCand} />
      <Screen name="Final" component={Final} />
    </Navigator>
  );
}
