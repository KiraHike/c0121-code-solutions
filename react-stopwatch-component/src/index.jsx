import React from 'react';
import ReactDOM from 'react-dom';
import Stopwatch from './stopwatch';

class App extends React.Component {
  render() {
    return <Stopwatch />;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
