import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import "./Messenger.css";
import Message from '../components/Message.component';
import db from '../firebase/firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move'
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';




const Messenger = () => {

    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    const [username, setUsername] = useState('');


    useEffect(() => {
        // run when the component load 
        db.collection('messages').orderBy("timestamp", "desc").onSnapshot(snapshot => {
           setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data()}) ))
        })
    }, [])

    useEffect(() => {
        const name = prompt("Pls enter your name"); // when this component loads this prompt fired 
        setUsername(name); // and set the name what user type in (prompt) box
    }, [])

    const sendMessage = e => {
        e.preventDefault(); // it kill the default behaviour of the form submit like (Refresh)

        db.collection("messages").add({
            message: input,
            username: username,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        setInput(''); // when button is clicked the input area is cleared
    };

    return (
        <div className="messenger_page">
            <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" alt="messenger logo" className="massenger_icon"/>
            <h1>Lets Enjoy It 🚀</h1>
            <h2> Welcome {username} </h2>

            <form className="app__form">
                <FormControl className="app_formControll">
                    <Input className="app__input" placeholder="Enter a message..." value={input} onChange={e => setInput(e.target.value)} />

                    <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>
                        <SendIcon />
                    </IconButton>
                </FormControl>
            </form>
            
            <FlipMove>
                {
                    messages.map(({id, message}) => (
                        <Message key={id} username={username} message={message} />
                    ))
                }
            </FlipMove>
        </div>
    )
};

export default Messenger
