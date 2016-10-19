import * as React from 'react';

const App = ({children}) => (<div>{children}</div>);

App.propTypes = {
  children: React.PropTypes.object.isRequired
};

export default App;