import React,{useState,useEffect} from 'react'
import querystring from 'query-string'
import io from 'socket.io-client'

let socket;

function Chat(location) {

    const [name,setName]=useState('');
    const [room,setRoom]=useState('');
    const ENDPOINT="localhost:5000";

    useEffect(()=>{
        const {name, room}= querystring.parse(location.search)

        socket=io(ENDPOINT);
        setName(name);
        setRoom(room);
    },[ENDPOINT,location.search]);


    return (
    <div>Chat</div>
  )
}

export default Chat