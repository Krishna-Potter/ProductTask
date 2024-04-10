import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { BottomTabData } from "./TabData";
import { Text, View } from "react-native";
import { colorTheme } from "../../../Theme/colorTheme";

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarStyle: {
    height: 60,
    paddingVertical: 8,
  },
};

const tabBarLabelStyles = {
  fontSize: 14,
  marginBottom: 4,
  fontWeight: "500",
};

function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      {BottomTabData.map((data, index) => {
        return (
          <Tab.Screen
            name={data.title}
            component={data.comp}
            key={index + data.title}
            options={{
              tabBarLabel: (tabLabelInfo) => (
                <Text
                  style={{
                    ...tabBarLabelStyles,
                    color: tabLabelInfo.focused
                      ? colorTheme.secondary
                      : colorTheme.primary,
                  }}
                >
                  {data.title}
                </Text>
              ),
              tabBarIcon: (tabInfo) => {
                return (
                  <View>
                    <data.options.icon
                      name={data.options.iconName}
                      size={25}
                      color={
                        tabInfo.focused
                          ? colorTheme.secondary
                          : colorTheme.primary
                      }
                    />
                  </View>
                );
              },
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}

export default BottomTabs;
