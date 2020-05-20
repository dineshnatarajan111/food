import React from 'react';
import { View, Text, StyleSheet, FlatList,TouchableOpacity } from 'react-native';
import {withNavigation} from 'react-navigation'
import ResultsDetail from './ResultsDetail';


const ResultList = (props) => {
    if (!props.result.length) {
        return null;
    }
    return(
        <View style={Styles.container}>
            <Text style= {Styles.title}> {props.title} </Text>
            <FlatList
             horizontal
             showsHorizontalScrollIndicator = {false}
             data={props.result}
             keyExtractor = { (results) => results.id}
             renderItem = {({item}) => {
                 return (
                    <TouchableOpacity onPress={()=> props.navigation.navigate('ResultsShow' ,{id: item.id})}>
                        <ResultsDetail results={item} />
                    </TouchableOpacity>
                );
             }}
            />
        </View>
    );
};

const Styles = StyleSheet.create({
    container: {
        flexDirection:"column",
        marginBottom: 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 15,
        marginBottom: 5
    },
});

export default withNavigation(ResultList);