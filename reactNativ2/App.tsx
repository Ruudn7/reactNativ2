import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './compnents/Header';
import StartGameScreen from './screens/StatrtGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScrren from './screens/GameOverScreen';

export default function App() {

  const [userNumber, setUserNumber] = useState<number>();
  const [guessRounds, setGuessRounds] = useState<number>(0)

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(undefined);
  }

  const startGameHandler = (selectedNumber: number) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  }

  const gameOverHandler = (numOfRounds: number) => {
    setGuessRounds(numOfRounds)
  }

  
  let content = <StartGameScreen onStartGame={(startGameHandler)} />;

  if (userNumber && guessRounds <=0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
  } else if (guessRounds > 0) {
    content = <GameOverScrren 
      roundsNumber={guessRounds}
      userNumber={userNumber}
      onReset={configureNewGameHandler}
    />
  }
  return (
    <View style={styles.screen}>
        <Header title="Guess a Number" />
        {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
