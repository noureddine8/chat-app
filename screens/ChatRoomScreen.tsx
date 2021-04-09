import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import ChatMessage from "../components/chatMessage/";
import { useRoute} from "@react-navigation/native";
import Colors from '../constants/Colors';

function ChatRoomScreen() {
    const [conversationState,setConversation] = useState(null);
    const route = useRoute();
    const {conversation} = route.params;
    useEffect(()=>{
        setConversation(conversation)
    },[])
    return (
        <View style={{padding:10,backgroundColor:"#e3e8dc",height:"100%"}}>
        {   conversationState === null ? <ActivityIndicator color={Colors.light.tint} style={{marginTop:250}} size="large" /> :
            <FlatList
            data = {conversationState?.messages}
            renderItem = {({item}) => <ChatMessage message ={item} />}
             />
        }
        </View>
    );
}

export default ChatRoomScreen;