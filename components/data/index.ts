import { Conversation,User,Message } from "../../types";

const firstUser:User = {id:"1",email:"Noure@gmail.com",name:"Noureddine",imageUri:"hahah"};
const firstMessage:Message = {id:"1",content:"Hello Noureddine",user:firstUser,createdAt:20210408};
let first:Conversation = {id:"1",lastMessage:firstMessage,recipient:firstUser};

const secondUser:User = {id:"2",email:"Bassma@gmail.com",name:"Bassma",imageUri:"hahah"};
const secondMessage:Message = {id:"2",content:"Hello Bassma",user:secondUser,createdAt:20180122};
let second:Conversation = {id:"2",lastMessage:secondMessage,recipient:secondUser};

export const data: Conversation[] = [first,second];


