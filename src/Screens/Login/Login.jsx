import React, { useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { Button, TextInput } from "react-native-paper";

function TextFieldBox({ placeholder, label, name, value, onChange }) {
  return (
    <TextInput
      style={styles.textBox}
      mode="outlined"
      label={label}
      placeholder={placeholder}
      value={value?.value}
      onChangeText={(value) => onChange(name, value)}
    />
  );
}

function LoginScreen() {
  const [userData, setUserData] = useState({});

  const handleUserData = (name, value) => {
    setUserData({ ...userData, [name]: value });
  };

  const submitUserData = () => {
    console.log("userdata", userData);
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.titleText}>Login</Text>
        <TextFieldBox
          placeholder="Enter Username"
          label="Username"
          name="username"
          value={userData.username}
          onChange={handleUserData}
        />
        <TextFieldBox
          placeholder="Enter Password"
          label="Password"
          name="password"
          value={userData.password}
          onChange={handleUserData}
        />
        <Button
          style={styles.submitBtn}
          mode="contained"
          onPress={submitUserData}
        >
          Login
        </Button>
      </View>
    </View>
  );
}

export default LoginScreen;
