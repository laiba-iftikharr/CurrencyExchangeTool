import React, { useState , useEffect} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    if (rating > 0) {
      const timeout = setTimeout(() => {
        navigation.goBack();
      }, 2000); // Delay of 2 seconds (2000 milliseconds)

      return () => clearTimeout(timeout);
    }
  }, [rating, navigation]);

  const handleRating = (selectedRating) => {
    setRating(selectedRating);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Share Your Experience</Text>
      <View style={styles.ratingContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity
            key={star}
            style={styles.starButton}
            onPress={() => handleRating(star)}
          >
            <MaterialIcons
              name={star <= rating ? 'star' : 'star-border'}
              size={32}
              color={star <= rating ? '#FFC107' : '#d0d9cd'}
            />
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.feedbackText}>We value your opinion. Thank you for taking the time to rate our app!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#78866B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  starButton: {
    padding: 5,
  },
  feedbackText: {
    fontSize: 16,
    color: '#d0d9cd',
    textAlign: 'center',
    lineHeight:30,
    paddingLeft: 25,
    paddingRight: 25
  },
});

export default Feedback;
