// @flow
import React, { Component } from 'react';
import SingupForm from './SignupForm';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionsList from '../../actions/signupActions';
import { browserHistory } from 'react-router';

type SignupFormState = {
  email: string;
  password: string;
};

type SignupFormProps = {
  actions: typeof actionsList;
}

class SignupPage extends Component {

  state: SignupFormState;
  props: SignupFormProps;

  constructor(props: SignupFormProps, context: Object) {
    super(props);
    (this: any).onEmailChange = this.onEmailChange.bind(this);
    (this: any).onPasswordChange = this.onPasswordChange.bind(this);
    (this: any).onSubmit = this.onSubmit.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  render() {
    return (
      <SingupForm
        passwordValue={this.state.password}
        emailValue={this.state.email}
        onEmailChange={this.onEmailChange}
        onSubmit={this.onSubmit}
        onPasswordChange={this.onPasswordChange} />
    );
  }

  async onSubmit(event: Event) {
   event.preventDefault();

    if(this.state.email.length > 0 && this.state.password.length > 0) {
      this.props.actions.fetching();
      await this.props.actions.createUser({...this.state});
      browserHistory.push('/login');
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
      this.setState({password: target.value});
    }
  }
}

function mapStateToProps(state: StoreStateType, ownProps: Object) {
  return {
  };
}

function mapDispatchToProps(dispatch: Function) {
  return {
    actions: bindActionCreators(actionsList, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);