import * as React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import MainPage from './components/main/MainPage';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';

export default (<Route path='/' component={App}>
  <IndexRoute component={MainPage}></IndexRoute>
  <Route path='login' component={LoginPage}></Route>
  <Route path='signup' component={SignupPage}></Route>
</Route>);