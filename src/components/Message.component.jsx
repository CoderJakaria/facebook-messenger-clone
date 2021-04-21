import { Card, CardContent, Typography } from '@material-ui/core';
import React, { forwardRef } from 'react';
import "./Message.style.css";

const Message = forwardRef(({username,message}, ref) => {

    const isUser = username === message.username;

    return (
        <div ref={ref} className={`message ${isUser && "message_user"}`} >

            <Card className={isUser ? "message__userCard" : "message__guestCard"} >
               <CardContent>
                    <Typography variant="h5" component="h2">
                        {!isUser && `${message.username || "Unknown User"}:`} {message.message}
                    </Typography>
                </CardContent>
            </Card>

        </div>
    )
})

export default Message