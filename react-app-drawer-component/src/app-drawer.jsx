import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuHidden: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (event.target.matches('button')) {
      this.setState({ menuHidden: false });
    } else if (event.target.matches('li') || event.target.className === 'container gray') {
      this.setState({ menuHidden: true });
    }
  }

  makeMenu() {
    const menuArray = [
      'About',
      'Get Started',
      'Sign In'
    ];

    const menu = menuArray.map(item => { return <li key={item}>{item}</li>; });

    return (
      <>
        <h1>Menu</h1>
        <ul>{menu}</ul>
      </>
    );
  }

  render() {
    const background = this.state.menuHidden ? 'container white' : 'container gray';
    const menuSlide = this.state.menuHidden ? 'menu close' : 'menu open';
    return (
      <div className={background} onClick={this.handleClick}>
        <div className={menuSlide}>
          {this.makeMenu()}
        </div>
        <div>
          <button className='fas fa-bars' />
        </div>
      </div>
    );
  }
}
