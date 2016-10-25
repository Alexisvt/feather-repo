// @flow
import * as React from 'react';

type LoginFormProps = {
  onSubmit: (event: Event) => Promise<void>;
  onPasswordChange: (event: Event) => void;
  onEmailChange: (event: Event) => void;
  onLogoutClicked: (event: Event) => Promise<void>;
  email: string;
  password: string;
};

const LoginForm = ({onSubmit, email, password, onEmailChange, onPasswordChange, onLogoutClicked}: LoginFormProps) => {

  return (
      <main className="login container">
      <div className="row">
        <div className="col-12 col-6-tablet push-3-tablet text-center">
          <h1 className="font-100">Welcome Back</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-6-tablet push-3-tablet col-4-desktop push-4-desktop text-center">
          <form className="form" onSubmit={onSubmit}>
            <fieldset>
              <input 
                value={email} 
                onChange={onEmailChange} 
                className="block" 
                type="text" 
                name="email" 
                placeholder="email" />
            </fieldset>
            <fieldset>
              <input 
                value={password} 
                onChange={onPasswordChange} 
                className="block" 
                type="text" 
                name="password" 
                placeholder="password" />
            </fieldset>
            <button type="submit" className="button button-primary block login">
              Login
            </button>
            <input type="button" className="button button-primary block login" value="Logout" onClick={onLogoutClicked} />
          </form>
        </div>
      </div>
    </main>
    );
};

export default LoginForm;