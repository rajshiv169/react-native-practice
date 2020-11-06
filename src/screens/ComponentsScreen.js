import React from 'react';
import {Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const greeting = "Hi there!";
    const goodbye =<Text>Goodbye!</Text>;
    return (
        <View>
            <Text style={styles.textStyle}>This is the components screen</Text>
            <Text style={styles.subHeaders}>{greeting}</Text>
            {goodbye}
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20
    }, 
    subHeaders: {
        fontSize: 30
    }
});

export default ComponentsScreen;