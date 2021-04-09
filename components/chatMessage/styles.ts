import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export const styles = StyleSheet.create({
  container: { padding: 10, borderRadius: 5,marginVertical:5 },
  name : {fontWeight:"bold",color:Colors.light.tint},
  time : {alignSelf:"flex-end"},
  timeTxt:{fontSize:12}
});
