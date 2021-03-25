import React from 'react';
import ReactDOM from 'react-dom';
import HotButton from './hot-button';

class App extends React.Component {
  render() {
    return <HotButton />;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
