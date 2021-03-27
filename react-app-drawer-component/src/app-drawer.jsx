import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuHidden: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (this.state.menuHidden && event.target.matches('button')) {
      this.setState({ menuHidden: false });
    } else if (!this.state.menuHidden && event.target.className === 'view') {
      this.setState({ menuHidden: true });
    }
  }

  makeMenu() {
    const menuArray = [
      'About',
      'Get Started',
      'Sign In'
    ];

    const menu = menuArray.map(item => {
      return <li key={item} className='view'>{item}</li>;
    });

    return (
      <h1>Menu</h1>,
      <ul>{menu}</ul>
    );
  }

  render() {
    const content = this.state.menuHidden ? <button className='fas fa-bars' /> : this.makeMenu();
    return (
      <div className='container view' onClick={this.handleClick}>{content}</div>
    );
  }
}
