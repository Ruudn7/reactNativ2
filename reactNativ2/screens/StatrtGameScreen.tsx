import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export interface StartScreen {

}

const StartGameScreen = (props: StartScreen) => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a new screen!</Text>
            <View style={styles.inputContainer}>
                <Text>Select a number!</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <Button title="Resert" onPress={() => {}} />
                    <Button title="Confirm" onPress={() => {}} />
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 5,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    }

});

export default StartGameScreen;