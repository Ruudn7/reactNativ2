import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

import NumberContainer from '../compnents/NumberContainer';
import Card from '../compnents/Card';

export interface GameScreenContent {
    userChoice: number;
    onGameOver: any;
}

const generateRandomBetween: any = (min: number, max: number, exclude: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum: number = Math.floor(Math.random() * (max - min))+ min;

    if (rndNum === exclude) {
        generateRandomBetween(min, max, rndNum);
    } else {
        return rndNum
    }
}

const GameScreen = (props: GameScreenContent) => {

    const [currentGuess, setCureentGuess] = useState<number>(generateRandomBetween(1, 100, props.userChoice))
    const [rounds, setRounds] = useState<number>(0)
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const {userChoice, onGameOver} = props;

    useEffect(() => {
        if (currentGuess === props.userChoice) {
            props.onGameOver(rounds);
        }
    }, [currentGuess, userChoice, onGameOver])

    const nextGuessHandler = (direction: string) => {
        if ((direction === 'lower' && currentGuess < props.userChoice) || (direction === 'greater' && currentGuess > props.userChoice)) {
            Alert.alert('Don\'t lie!' , 'You know that this is wrong...', [{text: 'Sorry', style: 'cancel'}])
            return;
        };
        
        if (direction === 'lower') {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess;
        }
 
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCureentGuess(nextNumber);
        setRounds(currentGuess => currentGuess + 1);
    }



    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer selectedNumber={currentGuess}></NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="LOWER" onPress={() => nextGuessHandler('lower')} />
                <Button title="GRATER" onPress={() => nextGuessHandler('greater')} />
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignContent: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
})

export default GameScreen;