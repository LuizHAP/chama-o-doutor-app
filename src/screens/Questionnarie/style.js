import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E26B2A",
    alignItems: "stretch",
    justifyContent: "center",
    padding: 20,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 5,
    color: "#FFF",
    fontSize: 18,
  },
  input: {
    marginBottom: 15,
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#ddd",
    backgroundColor: "#FFF",
    fontSize: 15,
    color: "#444",
  },
  submitButton: {
    backgroundColor: "#111",
    borderRadius: 4,
    padding: 16,
    alignItems: "center",
  },

  submitButtonText: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 15,
  },
});

export default styles;
