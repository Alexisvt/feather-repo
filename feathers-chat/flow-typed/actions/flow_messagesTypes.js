// @flow

declare type MessageStringType = 'NEW_MESSAGE' | 'GET_MESSAGES';
declare type NewMessageActionType = { message: MessageType, type: MessageStringType };
declare type GetMessagesActionType = {type: MessageStringType}