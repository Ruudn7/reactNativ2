import React, { useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Button,
    Keyboard,
    Alert
} from 'react-native';

import Card from '../compnents/Card';
import Input from '../compnents/Input';
import NumberContainer from '../compnents/NumberContainer';

import Colors from '../constants/colors'


export interface StartScreen {
    onStartGame: any;
}

const StartGameScreen = (props: StartScreen) => {


    const [enterdValue, setEnteredValue] = useState<string>('');
    const [confirmed, setConfirmed] = useState<boolean>(false);
    const [selectedNumber, setSelectedNumber] = useState<number>(0);

    const numberInputHanderl = (inputText: string) => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    }

    
    const resetInputHandler = () => {
        setEnteredValue('')
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enterdValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid number!', 'Number has to be a number between 1 nad 99', [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}])
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    }

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = (
            <Card style={styles.summaryContainer}>
                <Text style={styles.summaryContainer}>You selected</Text>
                <NumberContainer selectedNumber={selectedNumber} />
                <Button title="START GAME" onPress={() => props.onStartGame(selectedNumber)}/>
            </Card>
        )
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss }>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a new screen!</Text>

                <Card style={styles.inputContainer} >
                    <View style={styles.inputContainer}>
                        <Text>Select a number!</Text>
                        <Input
                            style={styles.input}
                            blurOnSubmit
                            autoCapitalize='none'
                            keyboardType="numeric"
                            maxLength={2}
                            onChangeText={numberInputHanderl}
                            value={enterdValue}
                        />
                        <View style={styles.buttonContainer}>
                            <View style={styles.button}>
                                <Button
                                    title="Resert"
                                    onPress={resetInputHandler}
                                    color={Colors.accent}
                                />
                            </View>
                            <View style={styles.button}>
                                <Button
                                    title="Confirm"
                                    onPress={confirmInputHandler}
                                    color={Colors.primary}
                                />
                            </View>
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
        
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
        paddingHorizontal: 15,
        marginTop: 8
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer: {
        width: 300,
        maxWidth: '100%',
        alignItems: 'center',
    },
    button: {
        width: 90
    },
    input: {
      width: 50,
      textAlign: 'center'
    },
    summaryContainer: {
        marginTop: 20,
        color: 'green',
        alignItems: 'center'
    }

});

export default StartGameScreen;