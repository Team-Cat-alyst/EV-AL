import { Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function AccountScreen() {
  const handleMyProfile = () => {
    // Navigate to My Profile screen
  };

  const handleMyBookings = () => {
    // Navigate to My Bookings screen
  };

  const handleSignOut = () => {
    // Perform sign-out logic
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
      <ThemedView style={styles.profileContainer}>
        <Image
          source={require('@/assets/images/splash.png')} // Replace with user's profile picture
          style={styles.profilePic}
        />
        <ThemedText type="title" style={styles.userName}>Deepraj</ThemedText>
      </ThemedView>
      
      {/* Options */}
      <ThemedView style={styles.optionsContainer}>
        <TouchableOpacity style={styles.option} onPress={handleMyProfile}>
          <Ionicons name="person-outline" size={24} color="#1D3D47" />
          <Text style={styles.optionText}>My Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handleMyBookings}>
          <Ionicons name="book-outline" size={24} color="#1D3D47" />
          <Text style={styles.optionText}>My Bookings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handleSignOut}>
          <Ionicons name="log-out-outline" size={24} color="#1D3D47" />
          <Text style={styles.optionText}>Sign Out</Text>
        </TouchableOpacity>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  bannerImage: {
    height: 200,
    width: '100%',
    resizeMode: 'cover',
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: -50, // Position profile pic slightly above the content
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#fff',
    marginBottom: 16,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  optionsContainer: {
    marginTop: 32,
    paddingHorizontal: 16,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  optionText: {
    marginLeft: 16,
    fontSize: 16,
    color: '#1D3D47',
  },
});