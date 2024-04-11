import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { ManageProductOptions } from "./data";
import ManageProductCard from "../../Components/Card/ManageCard";

function ManageProductsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Manage Products</Text>
      {ManageProductOptions.map((data, index) => {
        return (
          <ManageProductCard
            title={data.title}
            image={data.image}
            key={index}
          />
        );
      })}
    </View>
  );
}

export default ManageProductsScreen;
