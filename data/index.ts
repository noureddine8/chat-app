import { Conversation,User,Message } from "../types";

const mainUser:User = {id:"0",email:"Noureddine@gmail.com",name:"Noureddine",imageUri:"hahah"};

const mainMessage:Message = {id:"0",content:"Hello, I am Main",user:mainUser,createdAt:20210408};


const firstUser:User = {id:"1",email:"Yasser@gmail.com",name:"Yasser",imageUri:"hahah"};
const secondUser:User = {id:"2",email:"Bassma@gmail.com",name:"Bassma",imageUri:"hahah"};


const yasserFirst:Message = {id:"1",content:"Hello, i'm Yasser",user:firstUser,createdAt:20210408};
const yasserSecond:Message = {id:"2",content:"Great to see u",user:firstUser,createdAt:20210409};


const bassmaFirst:Message = {id:"3",content:"Hello, i'm Bassma",user:secondUser,createdAt:20180122};
const bassmaSecond:Message = {id:"4",content:"Good, to see u",user:secondUser,createdAt:20180123};



let first:Conversation = {id:"1",messages:[yasserFirst,yasserSecond,mainMessage],recipient:firstUser};
let second:Conversation = {id:"2",messages:[bassmaFirst,bassmaSecond],recipient:secondUser};

export const data: Conversation[] = [first,second];


