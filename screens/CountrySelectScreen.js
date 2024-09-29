import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { countries } from '../data/const';

export default function CountrySelectScreen() {
    const navigation = useNavigation();

    const handleCountrySelect = (country) => {
        console.log(`Navigating to CityList with country: ${country}`); 
        navigation.navigate('City', { selectedCountry: country });  // Her sendes landets navn som en parameter
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleCountrySelect(item)} style={styles.countryItem}>
            <Text style={styles.countryText}>{item}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Select a Country</Text>
            <FlatList
                data={countries}
                renderItem={renderItem}
                keyExtractor={(item) => item}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    countryItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    countryText: {
        fontSize: 18,
    },
});
