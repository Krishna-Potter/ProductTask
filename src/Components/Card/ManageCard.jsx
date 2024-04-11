import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";

function ManageProductCard({ title, image }) {
  return (
    <View style={styles.manageCardContainer}>
      <View>
        <Image source={require(image)} />
      </View>
      <View>
        <Text style={styles.manageCardContainer.title}>{title}</Text>
      </View>
    </View>
  );
}

export default ManageProductCard;
