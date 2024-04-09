import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import RouterConfig from "./src/Router/RouterConfig";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <RouterConfig />
        <StatusBar style="auto" />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
