import { Image, StyleSheet, Platform, TouchableOpacity, Text, View } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const handleBookTrip = () => {
    // Navigate to the booking screen
  };

  const handleMyVehicle = () => {
    // Navigate to the vehicle screen
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/banner-image.jpg')} // Replace with your banner image
          style={styles.bannerImage}
        />
      }>
      <SafeAreaView style={styles.container}>
        {/* Map Section */}
        <View style={styles.mapContainer}>
          <Text style={styles.mapTitle}>Find Charging Stations Near You</Text>
          <Image
            source={require('@/assets/images/map.jpeg')} // Replace with your map image or component
            style={styles.mapImage}
          />
        </View>

        {/* Button Options */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleBookTrip}>
            <Text style={styles.buttonText}>Book a Trip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleMyVehicle}>
            <Text style={styles.buttonText}>My Vehicle</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  bannerImage: {
    height: 200,
    width: '100%',
    resizeMode: 'cover',
  },
  mapContainer: {
    marginTop: 16,
    marginBottom: 32,
  },
  mapTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#1D3D47',
  },
  mapImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#1D3D47',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

