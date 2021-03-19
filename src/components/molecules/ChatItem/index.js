import React from 'react';
import IsMe from './IsMe';
import Others from './Others';

const ChatItem = ({isMe, avatar, message, time}) => {
  if (isMe) {
    return <IsMe message={message} time={time} />;
  }

  return <Others avatar={avatar} message={message} time={time} />;
};

export default ChatItem;
