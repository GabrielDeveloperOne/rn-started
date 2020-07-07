import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () =>{ 
    const [password, setPassword] = useState('');
    return(
        <View>
        <Text>Enter Password</Text>
            <TextInput 
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                onChangeText={newValue => setPassword(newValue)}
            />
            
            {password.length < 4 ? <Text>Password must be loger than 4 characters</Text> : <Text>My password is {password}</Text>}
        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;