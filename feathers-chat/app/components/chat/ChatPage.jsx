// @flow

import * as React from 'react';
import UserList from '../UserList/UserListPage';
import MessageList from '../message/MessageListPage';
import ComposeMessage from '../message/ComposeMessage';
import { app, PLACEHOLDER } from '../../common';

type ChatPageProps = {
  limit: number;
}

type ChatPageState = {
  users: any[];
  messages: any[];
  currentUser: '';
  avatar: string;
};

class ChatPage extends React.Component {

  props: ChatPageProps;
  state: ChatPageState

  constructor(props: ChatPageProps) {
    super(props);

    this.state = {
      users: [],
      messages: [],
      currentUser: '',
      avatar: PLACEHOLDER
    };

  }

  componentDidMount() {
    const userService = app.service('users');
    const messageService = app.service('messages');
    const currentUser = app.get('user').email;

    this.setState({currentUser});

    // Find all users initially
    userService.find().then(page => this.setState({ users: page.data }));

    // Listen to new users so we can show them in real-time
    userService.on('created', user => this.setState({
      users: this.state.users.concat(user)
    }));

    // Find the last 10 messages
    messageService.find({
      query: {
        $sort: { createdAt: -1 },
        $limit: this.props.limit || 10
      }
    }).then(page => this.setState({ messages: page.data.reverse() }));
    
    // Listen to newly created messages
    messageService.on('created', message => this.setState({
      messages: this.state.messages.concat(message)
    }));
  }

  render() {
    return (<div className="flex flex-row flex-1 clear">
      <UserList users={this.state.users} />
      <div className="flex flex-column col col-9">
        <MessageList avatar={this.state.avatar} currentUser={this.state.currentUser} messages={this.state.messages} />
        <ComposeMessage currentUser={this.state.currentUser}/>
      </div>
    </div>);
  }
}


export default ChatPage;