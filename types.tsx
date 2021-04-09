export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  ChatRoom:undefined

};

export type MainTabParamList = {
  Chats: undefined;
  Contacts: undefined;
};

export type TabOneParamList = {
  ChatScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type User = {
  id : String,
  email : String,
  name : String,
  imageUri : String
}

export type Message = {
  id : String,
  user : User
  content : String,
  createdAt : number
}

export type Conversation = {
  id : String,
  recipient : User,
  messages : Message[] 
}
