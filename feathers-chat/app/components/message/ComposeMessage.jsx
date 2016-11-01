// @flow
import * as React from 'react';
import { app } from '../../common';

type ComposeMessageState = {
  text: string;
}

type ComposeMessageProps = {
  currentUser: string;
}

class ComposeMessage extends React.Component {

  props: ComposeMessageProps;
  state: ComposeMessageState;

  constructor(props: ComposeMessageProps) {
    super(props);

    this.state = {
      text: ''
    };

    (this: any).sendMessage = this.sendMessage.bind(this);
    (this: any).updateText = this.updateText.bind(this);
  }

  updateText(event: Event) {

    const inputEl = event.target;
    
    if (inputEl instanceof HTMLInputElement) {
      this.setState({text: inputEl.value});  
    }

  }

  async sendMessage(event: Event) {
    event.preventDefault();

    // Get the messages service
    const messageService = app.service('messages');

    try {

      // create a new message with the text from the input field
      const message = {...this.state, sentBy: this.props.currentUser};

      await messageService.create(message);
    this.setState({ text: '' });
  }
  catch(err) {
    console.error(err);
  }

}

render() {
  return (<form className="flex flex-row flex-space-between"
    onSubmit={this.sendMessage}>
    <input type="text" name="text" className="flex flex-1"
      value={this.state.text} onChange={this.updateText} />
    <button className="button-primary" type="submit">Send</button>
  </form>);
}

}

export default ComposeMessage;