import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Preload from "../screens/Preload";
import Questionnarie from "../screens/Questionnarie";
import FirstStep from "../screens/FirstStep";

const { Navigator, Screen } = createStackNavigator();

export default function MainStack() {
  return (
    <Navigator
      initialRouteName="Preload"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="Preload" component={Preload} />
      <Screen name="Questionnarie" component={Questionnarie} />
      <Screen name="FirstStep" component={FirstStep} />
    </Navigator>
  );
}