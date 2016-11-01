// @flow
import * as React from 'react';
import { browserHistory } from 'react-router';
import { app } from '../../common';
import MainComponent from './MainComponent';

class HomePage extends React.Component {

  constructor() {
    super();
    (this: any).onSignupClick = this.onSignupClick.bind(this);
    (this: any).onLoginClick = this.onLoginClick.bind(this);
  }

  onSignupClick(event: Event) {
    event.preventDefault();

    browserHistory.push('signup');
  }

  async onLoginClick(event: Event) {
    event.preventDefault();

    try {
      await app.authenticate();
      browserHistory.push('chat');
    } catch (error) {
      console.error(error);
      browserHistory.push('login');
    }

  }

  render() {
    return (
      <MainComponent
        onLoginClick={this.onLoginClick}
        onSignupClick={this.onSignupClick} />
    );
  }
}

export default HomePage;