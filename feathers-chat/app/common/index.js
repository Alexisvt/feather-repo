// @flow
import io from 'socket.io';
import feathers from 'feathers-client';

const socket = io();

if (typeof(window) == 'undefined'){
    global.window = new Object();
}

export const PLACEHOLDER = 'https://placeimg.com/60/60/people';

export const dummyUser = {
  avatar: PLACEHOLDER,
  email: 'Anonymous'
};

export const app = feathers()
  .configure(feathers.socketio(socket))
  .configure(feathers.hooks())
  .configure(feathers.authentication({
    storage: window.localStorage
  }))
;

const messages = app.service('messages');

export default messages;