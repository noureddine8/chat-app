import * as React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ChatListItem from '../components/chatListItem';
import { data } from '../components/data';

import { View } from '../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <FlatList 
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <ChatListItem conversation={item}/> } 
        ItemSeparatorComponent={() => 
          <View style = {{marginStart:70,borderBottomWidth:1,borderColor:"grey"}} />
        }
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:10,
    flex: 1,
  },
});
