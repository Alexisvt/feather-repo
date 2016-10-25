// @flow
import axios from 'axios';

export function fetching() {
  return {
    type: 'FETCHING'
  };
}

export function createUser(user: UserType) {
  return async function (dispatch: Function) {
    const data = await axios.post('/signup', user);
    dispatch({
      type: 'FETCH_DATA',
      data
    });
  };
}