import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        {name: "Joe", age: 24, key: '1'},
        {name: "Chandler", age: 25, key: '2'},
        {name: "Ross", age: 26, key: '3'},
        {name: "Monica", age: 25, key: '4'},
        {name: "Phebe", age: 26, key: '5'},
        {name: "Racheal", age: 23, key: '6'}
    ];
    return (
        <FlatList 
            // horizontal
            // showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={friends}
            renderItem={({item}) => {
                return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
            }}
        />
    );
};

// Another way of definig key is add keyExtractor on FlatList
// KeyExtractor = {(friends) => {friends.name}}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 30,
        marginHorizontal: 20,
        fontSize: 20
    }
});

export default ListScreen;