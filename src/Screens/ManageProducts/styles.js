import { StyleSheet } from "react-native";
import { colorTheme } from "../../Theme/colorTheme";

export const styles = StyleSheet.create({
  container: {
    margin: 8,
    padding: 8,
    backgroundColor: colorTheme.white,
    elevation: 1,
    borderRadius: 5,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: "600",
    letterSpacing: 1,
    marginVertical: 16,
    color: colorTheme.secondary,
    textAlign: "center",
  },
});
