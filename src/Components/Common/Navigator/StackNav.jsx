import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../../../Screens/Login/Login";
import ProductInfoScreen from "../../../Screens/PrdoductInfo/ProductInfo";

const Stack = createStackNavigator();

function StackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Product Details"
        component={ProductInfoScreen}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
}

export default StackNav;
