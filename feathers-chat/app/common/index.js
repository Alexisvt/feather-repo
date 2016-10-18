// @flow
import feathers from 'feathers';
import io from 'socket.io';

const socket = io();

let app = feathers();

app.configure(feathers.socketio(socket));

const messages = app.service('messages');

