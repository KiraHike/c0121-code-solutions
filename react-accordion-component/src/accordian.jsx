import React from 'react';

export default class Accordian extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: 0 };
    this.handleClick = this.handleClick.bind(this);
    this.topicsArray = [
      {
        id: 1,
        name: 'Hypertext Markup Language',
        about: `Hypertext Markup Language (HTML) is the standard markup language
              for creating web pages and web applications. With Cascading Style
              Sheets (CSS) and JavaScript, it forms a triad of cornerstone
              technologies for the World Wide Web.`
      },
      {
        id: 2,
        name: 'Cascading Style Sheets',
        about: `Cascading Style Sheets (CSS) is a style sheet language used for
              describing the presentation of a document written in a markup
              language like HTML. CSS is a cornerstone technology of the World
              Wide Web alongside HTML and JavaScript.`
      },
      {
        id: 3,
        name: 'JavaScript',
        about: `JavaScript, often abbreviated as JS, is a high-level, interpreted
              programming language that conforms to the ECMAScript specification.
              JavaScript has curly-bracket syntax, dynamic typing, prototype-based
              object-orientation and first-class functions.`
      }
    ];
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
    const list = this.makeList(this.topicsArray);
    return (
      <>{list}</>
    );
  }
}
