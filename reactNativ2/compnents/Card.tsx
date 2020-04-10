import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export interface CardContent {
    children: any;
    style?: any;
}

const Card = (props: CardContent) => {
    return (
        <View
            style={{...styles.card, ...props.style }}
        >
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
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
})

export default Card;