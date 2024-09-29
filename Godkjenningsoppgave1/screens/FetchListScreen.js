import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useRoute } from '@react-navigation/native';
import { cityCoordinates } from '../data/const';

export default function FetchListScreen() {
    const route = useRoute();
    const { selectedCity } = route.params || {}; 
    const country = selectedCity ? Object.keys(cityCoordinates).find((key) =>
        cityCoordinates[key].hasOwnProperty(selectedCity)
    ) : null;

    const coordinates = country ? cityCoordinates[country][selectedCity] : { latitude: 0, longitude: 0 }; 

    return (
        <View style={styles.container}>
            {selectedCity ? (
                <>
                    <Text style={styles.title}>Map of {selectedCity}</Text>
                    <MapView
                        style={styles.map}
                        initialRegion={{
                            latitude: coordinates.latitude,
                            longitude: coordinates.longitude,
                            latitudeDelta: 0.01,  //Deffinerer hvor mye av kartet som skal vises
                            longitudeDelta: 0.01, //Deffinerer hvor mye av kartet som skal vises
                        }}
                    >
                        <Marker coordinate={coordinates} title={selectedCity} />
                    </MapView>
                </>
            ) : (
                <Text style={styles.errorText}>Please select a city first.</Text>
            )}
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
    errorText: {
        fontSize: 18,
        color: 'red',
    },
});
