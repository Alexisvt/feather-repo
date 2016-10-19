// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import Subscriber from '../../common';

const Sample = ({ messages }: {messages: MessageType[]}) => {

  const messagesLayout = messages.map((message, index) => <div key={message._id}>{message.text}</div>);

  // Subscriber.create({ text: 'hello world from react'});

  return (<div>hola mundo from feathers {messagesLayout}</div>);
};

function mapStateToProps(state: StoreStateType, OwnProps) {
  return {
    messages: state.messages
  };
}

export default connect(mapStateToProps)(Sample);