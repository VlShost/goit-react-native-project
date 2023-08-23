import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function MapScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}
    >
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 48.4869157,
          longitude: 35.0705315,
          longitudeDelta: 0.001,
          latitudeDelta: 0.001,
        }}
      >
        <Marker coordinate={{ latitude: 48.4869157, longitude: 35.0705315 }} />
      </MapView>
    </View>
  );
}
