import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const Input = (props: any) => {
    return (
        <TextInput
            {...props }
            style={{...styles.input, ...props.style}}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginVertical: 10
    }
})

export default Input;