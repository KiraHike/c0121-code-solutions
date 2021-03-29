import React from 'react';
import UserList from './user-list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(result => {
        return result.json();
      })
      .then(people => {
        this.setState({ users: people });
      })
      .then(() => {
        this.setState({ isLoading: false });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return this.state.isLoading
      ? <p>Loading...</p>
      : <UserList users={this.state.users} />;
  }
}

export default App;
