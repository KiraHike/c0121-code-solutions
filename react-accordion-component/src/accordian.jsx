import React from 'react';

export default class Accordian extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.handleClick = this.handleClick.bind(this);
    this.topicsArray = [
      {
        name: 'Hypertext Markup Language',
        about: `Hypertext Markup Language (HTML) is the standard markup language
              for creating web pages and web applications. With Cascading Style
              Sheets (CSS) and JavaScript, it forms a triad of cornerstone
              technologies for the World Wide Web.`
      },
      {
        name: 'Cascading Style Sheets',
        about: `Cascading Style Sheets (CSS) is a style sheet language used for
              describing the presentation of a document written in a markup
              language like HTML. CSS is a cornerstone technology of the World
              Wide Web alongside HTML and JavaScript.`
      },
      {
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
      return (
        <li key={topic.name} className='hidden'>
          {topic.name}
          <p>
            {topic.about}
          </p>
        </li>
      );
    });

    return <ul onClick = {this.handleClick}> { topics }</ul >;
  }

  handleClick(event) {
    if (event.target.matches('li')) {
      if (this.state.open) {
        this.setState({ open: false });
        event.target.className = 'hidden';
      } else {
        this.setState({ open: true });
        event.target.className = 'hidden';
      }
    }
  }

  render() {
    const list = this.makeList(this.topicsArray);
    return (
    <div className='container'>{list}</div>
    );
  }
}
