import * as React from 'react';
import { Text, TouchableHighlight, TouchableOpacity, View, } from 'react-native';
import {Avatar} from "react-native-elements";
import Colors from '../../constants/Colors';
import {Conversation} from "../../types";
import { styles } from './styles';
import {useNavigation} from "@react-navigation/native"
import moment from "moment";

export type ChatListItemProp = {
    conversation:Conversation
}

function ChatListItem(props:ChatListItemProp) {
    const navigation = useNavigation()
    const {conversation} = props;
    const lastIndex = conversation.messages.length - 1;
    return (
        <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={()=>navigation.navigate("ChatRoom",{conversation})} 
        >
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
                    <Text style={{fontSize:13,color:"#758283"}}>{moment(conversation.messages[0].createdAt,"YYYYMMDD").fromNow()}</Text>
                </View>
                <Text style={{fontSize:14,color:"#758283"}}>{conversation.messages[lastIndex].content.substr(0,35) }{(conversation.messages[0].content.length > 35 && "...")}</Text>
            </View>
            </View>
        </TouchableHighlight>
    );
}

export default ChatListItem;