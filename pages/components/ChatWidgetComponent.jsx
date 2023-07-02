import React, {useCallback, useEffect, useState} from 'react';
import ChatWidget from "react-styled-chat-widget";
import {Message, MessageSendHandler, SendClickHandler} from "react-styled-chat-widget";
import Spinner  from './Spinner';



const ChatWidgetComponent=()=> {

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // load some messages from history here using setMessages
    setLoading(false);
  }, []);


  // used to switch message delivery indicator
  const onMessageSend = useCallback<MessageSendHandler>((currentID, setDeliveryStatus) => {
    setDeliveryStatus();
  }, []);

  // called when user presses the send button
  const onSendClick = useCallback<SendClickHandler>(() => {
    setMessages((messages) => {
      return [
        ...messages,
        {id: Math.floor(Math.random() * 10000), isPrimary: true, date: new Date(), sent: true, message, author: 'You'},
      ]
    })
  }, []);



  return (
    <ChatWidget 
      defaultPosition={'bottomRight'}
      messages={messages} // required
      loading={loading} // required
      onMessageSend={onMessageSend} // required
      onSendClick={onSendClick} // required
      spinner={<Spinner/>} // required
    >
      {/* // Header of the widget should be here :) */}
      <div>
        <p>Welcome to support window!</p>
        <hr/>
        <p>Here you can chat directly with moderators. They usually answer in a few hours.</p>
      </div>
    </ChatWidget>
  )
}

export default ChatWidgetComponent