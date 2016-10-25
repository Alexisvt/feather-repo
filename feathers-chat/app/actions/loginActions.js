import axios from 'axios';

export function loginAction(user: UserType) {
  return async function (dispatch: Function) {
    try {
      const credentials = await axios.post('/auth/local', user);
      return credentials;
    } catch (err) {
      throw (err);
    }
  };
}