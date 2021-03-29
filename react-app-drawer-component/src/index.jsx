import React from 'react';
import ReactDOM from 'react-dom';
import AppDrawer from './app-drawer';

class App extends React.Component {
  render() { return <AppDrawer />; }
}

ReactDOM.render(<App />, document.querySelector('#root'));
