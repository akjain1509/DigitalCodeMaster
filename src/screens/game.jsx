import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';
import AppHeader from '../components/appHeader';
import {Colors} from '../utilities/constant';

const GameScreen = () => {
  const [targetNumber, setTargetNumber] = useState(() =>
    generateRandomNumber(),
  );
  const [userGuess, setUserGuess] = useState('');
  const [guessCount, setGuessCount] = useState(0);

  useEffect(() => {
    if (parseInt(userGuess) === targetNumber) {
      Alert.alert(
        'Congratulations!',
        `You guessed the number in ${guessCount} attempts.`,
      );
      resetGame();
    }
  }, [userGuess, targetNumber, guessCount]);

  const handleGuess = () => {
    const guess = parseInt(userGuess);

    if (isNaN(guess)) {
      Alert.alert('Invalid Guess', 'Please enter a valid number.');
      return;
    }

    setGuessCount(guessCount + 1);

    if (guess < targetNumber) {
      Alert.alert('Too Low', 'Try a higher number.');
    } else if (guess > targetNumber) {
      Alert.alert('Too High', 'Try a lower number.');
    } else {
    }

    setUserGuess('');
  };

  const resetGame = () => {
    setTargetNumber(generateRandomNumber());
    setUserGuess('');
    setGuessCount(0);
  };

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  return (
    <View style={{backgroundColor: Colors.white, flex: 1}}>
      <AppHeader title={'Game'} />

      <View style={styles.gameContainer}>
        <Text style={styles.instructionText}>Guess the Number (1-100)</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your guess"
          keyboardType="numeric"
          value={userGuess}
          onChangeText={text => setUserGuess(text)}
        />

        <TouchableOpacity style={styles.guessButton} onPress={handleGuess}>
          <Text style={styles.guessButtonText}>Guess</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.resetButton} onPress={resetGame}>
          <Text style={styles.resetButtonText}>Reset Game</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  instructionText: {
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: Colors.lightGray,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  guessButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  guessButtonText: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  resetButton: {
    backgroundColor: Colors.secondary,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  resetButtonText: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default GameScreen;
