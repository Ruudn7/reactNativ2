import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../constants/colors';

export interface NumberContainer {
    selectedNumber: number;
}

const NumberContainer = (props: NumberContainer) => {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{props.selectedNumber}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: Colors.accent,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    number: {
        color: Colors.accent,
        fontSize: 22
    }
})

export default NumberContainer;