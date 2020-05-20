import React from 'react';
import { View, Text, StyleSheet, TextInput} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = ( {term, onTermChange, onTermSubmit }) => {
    return(
        <View style= {styles.background}>
            <Feather name="search" style={styles.icn} />
            <TextInput 
             autoCapitalize="none" 
             autoCorrect={false} 
             style={styles.inp} 
             placeholder="Search" 
             value={term} 
             onChangeText={onTermChange} 
             onEndEditing= {onTermSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        flexDirection: "row",
        backgroundColor:'#0fEEEE' ,
        height: 50,
        borderRadius: 10,
        marginHorizontal: 15,
        marginBottom: 10,
    },
    inp: {
        flex:1,
        fontSize: 18
    },
    icn: {
        fontSize: 40,
        alignSelf: "center",
    },
});

export default SearchBar;