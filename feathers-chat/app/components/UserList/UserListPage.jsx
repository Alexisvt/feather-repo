// @flow
import * as React from 'react';
import { PLACEHOLDER, app } from '../../common';
import { browserHistory } from 'react-router';

type UserListPageProps = {
  users: {avatar: string, email: string}[];
}

class UserListPage extends React.Component {

  props: UserListPageProps;

  constructor(props: UserListPageProps) {
    super(props);

    (this: any).logout = this.logout.bind(this);
  }

  logout() {
    app.logout().then(() => browserHistory.push('/'));
  }

  render() {
    const users = this.props.users;

    return <aside className="sidebar col col-3 flex flex-column flex-space-between">
      <header className="flex flex-row flex-center">
        <h4 className="font-300 text-center">
          <span className="font-600 online-count">{users.length}</span> users
        </h4>
      </header>

      <ul className="flex flex-column flex-1 list-unstyled user-list">
        {users.map((user, key: number) =>
          <li key={key}>
            <a className="block relative" href="#">
              <img src={user.avatar || PLACEHOLDER} className="avatar" />
              <span className="absolute username">{user.email}</span>
            </a>
          </li>
        )}
      </ul>
      <footer className="flex flex-row flex-center">
        <a href="#" className="logout button button-primary" onClick={this.logout}>
          Sign Out
        </a>
      </footer>
    </aside>;
  }
}

export default UserListPage;