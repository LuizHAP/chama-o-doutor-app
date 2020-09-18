import { StyleSheet, Dimensions } from "react-native";

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingTop: 100,
    alignItems: "center",
  },
  video: {
    width: width /1.3,
    height: height/2,
  }
});

export default styles;
