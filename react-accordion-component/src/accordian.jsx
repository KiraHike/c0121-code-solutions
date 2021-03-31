import React from 'react';

export default class Accordian extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  makeList(array) {
    const topics = array.map(topic => {
      if (topic.id === Number(this.state.view)) {
        return (
          <li key={topic.id}>
            <h2 id={topic.id}>{topic.name}</h2>
            <p>{topic.about}</p>
          </li>
        );
      } else {
        return (
          <li key={topic.id}>
            <h2 id={topic.id}>{topic.name}</h2>
          </li>
        );
      }
    });

    return <ul onClick={this.handleClick}>{topics}</ul >;
  }

  handleClick(event) {
    if (event.target.matches('h2')) {
      event.target.id === this.state.view
        ? this.setState({ view: 0 })
        : this.setState({ view: event.target.id });
    }
  }

  render() {
    const list = this.makeList(this.props.array);
    return (
      <>{list}</>
    );
  }
}
