// @flow
import * as React from 'react';
import { dummyUser } from '../../common';
import moment from 'moment';

type MessageListPageProps = {
  messages: any[];
  currentUser: string;
  avatar: string;
};

class MessageListPage extends React.Component {

  props: MessageListPageProps;

  constructor(props: MessageListPageProps) {
    super(props);

    (this: any).renderMessage = this.renderMessage.bind(this);
  }

  renderMessage(message: any) {
    const sender = message.sentBy || dummyUser.email;

    return <div key={message._id} className="message flex flex-row">
      <img src={this.props.avatar} alt={sender} className="avatar" />
      <div className="message-wrapper">
        <p className="message-header">
          <span className="username font-600">{sender}</span>
          <span className="sent-date font-300">
            {moment(message.createdAt).format('MMM Do, hh:mm:ss')}
          </span>
        </p>
        <p className="message-content font-300">
          {message.text}
        </p>
      </div>
    </div>;
  }

  render() {
    return (
      <main className="chat flex flex-column flex-1 clear">
        {this.props.messages.map(this.renderMessage)}
      </main>
    );
  }
}

export default MessageListPage;