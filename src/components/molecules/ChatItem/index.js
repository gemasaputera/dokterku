import React from 'react';
import IsMe from './IsMe';
import Others from './Others';

const ChatItem = ({isMe, message}) => {
  if (isMe) {
    return <IsMe message={message} />;
  }

  return <Others message={message} />;
};

export default ChatItem;
