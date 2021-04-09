import React, { useState } from 'react';
import { View,Text, Button, TouchableOpacity, TextInput } from 'react-native';
import Colors from '../../constants/Colors';
import { styles } from './styles';


function MessageInput() {
    const [message, setMessage] = useState("");
    const onPress = () =>{
        console.log(message);
        setMessage("");
    }
    return (
        <View style={styles.container}>
            <View style={styles.input}>
            <TextInput style={styles.txtInput} placeholder="Type a message" value={message} onChangeText={setMessage} />
            </View>
            <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text>Send</Text>
            </TouchableOpacity>
        </View>
    );
}

export default MessageInput;