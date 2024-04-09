import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeScreen from "../../../Screens/Home/Home";
import { BottomTabData } from "./TabData";

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator>
      {BottomTabData.map((data, index) => {
        return (
          <Tab.Screen
            name={data.title}
            component={data.comp}
            key={index + data.title}
          />
        );
      })}
    </Tab.Navigator>
  );
}

export default BottomTabs;
