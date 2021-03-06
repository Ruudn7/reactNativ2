import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export interface GameOverScrren {
    roundsNumber: number;
    userNumber: number | undefined;
    onReset: any;
}

const GameOverScrren = (props: GameOverScrren) => {
    return (
        <View style={styles.screen}>
            <Text>The Game is over</Text>
            <Text>Number of rounds: {props.roundsNumber}</Text>
            <Text>Number was: {props.userNumber}</Text>
            <Button title="NewGame" onPress={props.onReset} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default GameOverScrren;