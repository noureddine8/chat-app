import {StyleSheet} from "react-native";
import Colors from "../../constants/Colors";

export const styles = StyleSheet.create({
    container:{height:"5%",
    width:"100%",
    borderRadius:15,
    paddingTop:25,
    paddingBottom:20,
    alignItems:"center",
    flexDirection:"row",
    },
    input : {flex:0.88,backgroundColor:"#fff",borderRadius:20,},
    button : {flex:0.12,backgroundColor:Colors.light.tint,padding:10,borderRadius:20,alignItems:"center",marginStart:5},
    txtInput : {height:20,margin:12}
})