// @flow
import React, { Component } from 'react';
import LoginForm from './LoginForm';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionsList from '../../actions/loginActions';
import { browserHistory } from 'react-router';
import { app } from '../../common';

type LoginPageProps = {
  actions: typeof actionsList
};

type LoginPageState = {
  password: string;
  email: string;
};

class LoginPage extends Component {

  state: LoginPageState;
  props: LoginPageProps;

  constructor(props) {
    super(props);

    this.state = {
      password: '',
      email: ''
    };

    (this: any).onEmailChange = this.onEmailChange.bind(this);
    (this: any).onPasswordChange = this.onPasswordChange.bind(this);
    (this: any).onSubmit = this.onSubmit.bind(this);
    (this: any).onLogoutClicked = this.onLogoutClicked.bind(this);
  }

  async onLogoutClicked(event: Event) {
    event.preventDefault();

    try {
      app.logout();
      console.log(`logout correctly`);  
    } catch (error) {
      console.log(`error: ${error}`);   
    }
  }

  onEmailChange(event: Event) {
    const target = event.target;

    if (target instanceof HTMLInputElement) {
      this.setState({ email: target.value });
    }
  }

  onPasswordChange(event: Event) {
    const target = event.target;

    if (target instanceof HTMLInputElement) {
      this.setState({ password: target.value });
    }
  }

  async onSubmit(event: Event) {
    event.preventDefault();

    if (this.state.email.length > 0 && this.state.password.length > 0) {
      try {
        // try to access here to the chat page after authenticating

        const credentials = {...this.state };

        await app.authenticate({
          type: 'local',
          email: credentials.email,
          password: credentials.password
        });
        console.log(`it works`);
        browserHistory.push('chat');
      }
      catch (err) {
        console.log(`Something bad happens: ${JSON.stringify(err)}`);
      }
    }

  }

  render() {
    return (
      <LoginForm
        onEmailChange={this.onEmailChange}
        onPasswordChange={this.onPasswordChange}
        onLogoutClicked={this.onLogoutClicked}
        onSubmit={this.onSubmit}
        email={this.state.email}
        password={this.state.password} />
    );
  }
}


function mapStateToProps(state: StoreStateType) {
  return {};
}

function mapDispatchToProps(dispatch: Function) {
  return {
    actions: bindActionCreators(actionsList, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);