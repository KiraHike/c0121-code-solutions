import React from 'react';
import ReactDOM from 'react-dom';
import ToggleSwitch from './toggle-switch';

class App extends React.Component {
  render() {
    return <ToggleSwitch />;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
