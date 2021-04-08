import * as React from 'react';
import { Text, View } from 'react-native';
import {Avatar} from "react-native-elements";
import Colors from '../../constants/Colors';
import {Conversation} from "../../types";
import { styles } from './styles';
import moment from "moment";

export type ChatListItemProp = {
    conversation:Conversation
}

function ChatListItem(props:ChatListItemProp) {
    const {conversation} = props;
    return (
        <View style={styles.container}>
            <View style={styles.avatar}>
            <Avatar
                rounded
                size="medium"
                avatarStyle={{backgroundColor:Colors.light.tint}}
                source={{
                    uri:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                }}
            />
            </View>

            <View style={styles.data}>
                <View style={styles.nameAndTime}>
                    <Text style={{fontSize:17,fontWeight:"700"}}>{conversation.recipient.name}</Text>
                    <Text style={{fontSize:13,color:"#758283"}}>{moment(conversation.lastMessage.createdAt,"YYYYMMDD").fromNow()}</Text>
                </View>
                <Text style={{fontSize:14,color:"#758283"}}>{conversation.lastMessage.content.substr(0,35) }{(conversation.lastMessage.content.length > 35 && "...")}</Text>
            </View>
        </View>
    );
}

export default ChatListItem;