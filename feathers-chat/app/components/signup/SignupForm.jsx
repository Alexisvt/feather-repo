// @flow
import * as React from 'react';

type SingupFormProps = {
  onEmailChange: (event: Event) => void;
  onPasswordChange: (event: Event) => void;
  onSubmit: (event: Event) => Promise<void>;
  passwordValue: string;
  emailValue: string;
};

const SignupForm = ({onEmailChange, onPasswordChange, onSubmit, passwordValue, emailValue}: SingupFormProps) => (<main className="login container">
      <div className="row">
        <div className="col-12 col-6-tablet push-3-tablet text-center">
          <h1 className="font-100">Create an Account</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-6-tablet push-3-tablet col-4-desktop push-4-desktop text-center">
          <form 
            className="form"
            onSubmit={onSubmit}
            >
            <fieldset>
              <input onChange={onEmailChange} className="block" type="text" name="email" placeholder="email" value={emailValue} />
            </fieldset>
            <fieldset>
              <input onChange={onPasswordChange} className="block" type="text" name="password" placeholder="password"
              value={passwordValue} 
              />
            </fieldset>
            <button type="submit" className="button button-primary block signup" >
              Signup
            </button>
          </form>
        </div>
      </div>
    </main>);

export default SignupForm;