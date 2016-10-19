// @flow
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import routes from './routers';

import Subscriber from './common';

import { getMessages, newMessage } from './actions/messageActions';

import configureStore from './store/configureStore';

const store = configureStore();
store.dispatch(getMessages());

/* Subscribing to messages creations */
Subscriber.on('created', (message: MessageType) => {
  store.dispatch(newMessage(message));
});

ReactDOM.render(<Provider store={store}><Router history={browserHistory} routes={routes}></Router></Provider>, document.getElementById('app'));