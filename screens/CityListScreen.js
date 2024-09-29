import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { cities } from '../data/const'; 

export default function CityListScreen() {
    const route = useRoute();
    const navigation = useNavigation();
    const { selectedCountry } = route.params; // Parametrene mottas her
    const citiesList = cities[selectedCountry] || [];  // Bruker den mottatte parameteren til å hente riktig by-liste

    const handleCitySelect = (city) => {
        navigation.navigate('Map', { selectedCity: city }); 
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleCitySelect(item)} style={styles.cityItem}>
            <Text style={styles.cityText}>{item}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cities in {selectedCountry}</Text>
            <FlatList
                data={citiesList}
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
    cityItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    cityText: {
        fontSize: 18,
    },
});
