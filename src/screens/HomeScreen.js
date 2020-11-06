import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  // console.log(props.navigation)
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={styles.text}>Hi, Welcome</Text>
      <Button
        onPress={() => navigation.navigate('Components') }
        title="Go to Components Demo" 
      />
      <Button
        onPress={() => navigation.navigate('List') }
        title="Go to List Demo" 
      />
      <Button
        onPress={() => navigation.navigate('Image') }
        title="Go to Image Demo" 
      />
      <Button
        onPress={() => navigation.navigate('Counter') }
        title="Go to Counter Demo" 
      />
      <Button
        onPress={() => navigation.navigate('Color') }
        title="Go to Color Demo" 
      />
      <Button
        onPress={() => navigation.navigate('Square') }
        title="Go to Square Color Demo" 
      />
      {/* <TouchableOpacity onPress={() => props.navigation.navigate('List')  } >
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20
  }
});

export default HomeScreen;