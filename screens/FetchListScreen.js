import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useRoute } from '@react-navigation/native';
import { cityCoordinates } from '../data/const'; 

export default function FetchListScreen() {
    const route = useRoute();
    const { selectedCity } = route.params; 


    const country = Object.keys(cityCoordinates).find((key) =>
        cityCoordinates[key].hasOwnProperty(selectedCity)
    );

  
    const coordinates = country ? cityCoordinates[country][selectedCity] : { latitude: 0, longitude: 0 }; 

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Map of {selectedCity}</Text>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: coordinates.latitude,
                    longitude: coordinates.longitude,
                    latitudeDelta: 0.01,  // Definerer hvor "innzoomet" kartet er vertikalt
                    longitudeDelta: 0.01, // Definerer hvor "innzoomet" kartet er horisontalt
                }}
            >
                <Marker coordinate={coordinates} title={selectedCity} />
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 10,
    },
    map: {
        width: '100%',
        height: '90%',
    },
});
