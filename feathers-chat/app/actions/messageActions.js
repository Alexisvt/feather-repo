// @flow

export function newMessage(message: MessageType): NewMessageActionType {
  return {
    message: message,
    type: 'NEW_MESSAGE'
  };
}

export function getMessages(): GetMessagesActionType {
  return {
    type: 'GET_MESSAGES'
  };
}