import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';


const ResultsDetail = ({results}) => {
    return(
        <View style={styles.batch}>
            <Image style={styles.img} source={{ uri: results.image_url }} />
            <Text style={styles.name}> {results.name} </Text>
            <Text> {results.rating} Starts, {results.review_count} Reviews </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    batch: {
        marginLeft: 15,
    },
    img: {
        width: 250,
        height: 120,
        borderRadius: 10,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
    },
});


export default ResultsDetail;