import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Questionnarie from "../screens/00_Questionario";
import Inicio from "../screens/01_Inicio";
import UploadData from "../screens/UploadData";
import CandPrefeito from "../screens/02_CandPrefeito";
import AprovaGovPrefKiko from "../screens/03_AprovaGovPrefKiko";
import CandidatosKiko from "../screens/04_CandPrefKiko";
import QuerConhecerCandPrefKiko from "../screens/05_QuerConhecerCandPrefKiko";
import VideoKikoCand from "../screens/VideoKikoCand";
import Final from "../screens/Final";
import ConheceCand from "../screens/ConheceCand";
import OutroCand from "../screens/OutroCand";
import Nivaldo from "../screens/Nivaldo";

const { Navigator, Screen } = createStackNavigator();

export default function MainStack() {
  return (
    <Navigator
      initialRouteName="Questionario"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="Questionario" component={Questionnarie} />
      <Screen name="00-Inicial" component={Inicio} />
      <Screen name="UploadData" component={UploadData} />
      <Screen name="01-CandPrefeito" component={CandPrefeito} />
      <Screen name="02-AprovaGovPrefKiko" component={AprovaGovPrefKiko} />
      <Screen name="03-CandPrefKiko" component={CandidatosKiko} />
      <Screen
        name="04-QuerConhecerCandPrefKiko"
        component={QuerConhecerCandPrefKiko}
      />
      <Screen name="VideoKikoCand" component={VideoKikoCand} />
      <Screen name="ConheceCand" component={ConheceCand} />
      <Screen name="OutroCand" component={OutroCand} />
      <Screen name="Nivaldo" component={Nivaldo} />
      <Screen name="Final" component={Final} />
    </Navigator>
  );
}
