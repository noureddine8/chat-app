import moment from "moment";
import React from "react";
import {View,Text} from "react-native";
import Colors from "../../constants/Colors";
import { Message } from "../../types";
import { styles } from "./styles";

export type chatMessageProp = {
    message: Message
}

function ChatMessage(props : chatMessageProp) {

    const {message} = props;
    const isMain = () => message.user.id === "0";
    
return(
    <View style={[styles.container,
    {backgroundColor:isMain()? Colors.light.tint:"#F4F4F4",
    marginEnd:isMain()? 0 : 50,
    marginStart:isMain()? 50 : 0,
    }]}
    >
        {! isMain() && 
        <View>
            <Text style={styles.name}>
                {message.user.name}
            </Text>
        </View>
        }
        <View>
            <Text style={{fontSize:15,color:isMain() ? "#e3e8dc":"#000" }}>{message.content}</Text>
        </View>
        <View style = {styles.time}>
            <Text style= {styles.timeTxt}>
                {moment(message.createdAt,"YYYYMMDD").fromNow()}
            </Text>
        </View>
    </View>
)
    
}

export default ChatMessage;
