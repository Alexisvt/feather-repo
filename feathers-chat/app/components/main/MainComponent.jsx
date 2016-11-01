// @flow
import * as React from 'react';

type MainComponentProps = {
  onSignupClick(event: Event): void;
  onLoginClick(event: Event): Promise<void>;
};

const MainComponent = ({ onSignupClick, onLoginClick }: MainComponentProps) => {

  return (
    <main className="home container">
      <div className="row">
        <div className="col-12 col-8-tablet push-2-tablet text-center">
          <img className="logo center-item"
            src="http://feathersjs.com/img/feathers-logo-wide.png"
            alt="Feathers Logo" />
          <h3 className="title">Chat</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-12 push-4-tablet col-4-tablet">
          <div className="row">
            <div className="col-12">
              <a onClick={onLoginClick} className="button button-primary block login">
                Login
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <a
                className="button button-primary block signup"
                type="button" 
                name="signup"
                onClick={onSignupClick} > Signup </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainComponent;