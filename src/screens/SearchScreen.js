import React,{useState}  from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultsList';

const SearchScreen = (props) => {
    const [term,setTerm] = useState('');
    const [results,errmsg, searchApi] = useResults();

    const FilterByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    };

    return(
        <View style={styles.container}>
            <SearchBar 
             term = {term} 
             onTermChange = { setTerm }
             onTermSubmit = {()=> searchApi(term ) }
             />
            <ScrollView>
                <ResultList result= {FilterByPrice('$')} title ="Cost Effective" />
                <ResultList result= {FilterByPrice('$$')} title ="Bit Pricer" />
                <ResultList result= {FilterByPrice('$$$')} title ="Big Spender!" />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default SearchScreen;