import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import BottomTabs from "../Components/Common/Navigator/BottomTabs";
import StackNav from "../Components/Common/Navigator/StackNav";

function RouterConfig() {
  const isLoggedIn = true;

  return (
    <View style={styles.container}>
      {isLoggedIn ? <BottomTabs /> : <StackNav />}
    </View>
  );
}

export default RouterConfig;
