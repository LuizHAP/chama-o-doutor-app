import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Preload from "../screens/Preload";

const { Navigator, Screen } = createStackNavigator();

export default function MainStack() {
  return (
    <Navigator
      initialRouteName="Preload"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="Preload" component={Preload} />
    </Navigator>
  );
}