import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  render() {
    if (this.state.clicks < 4) {
      return <button className="dark-purple" onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.clicks > 3 && this.state.clicks < 7) {
      return <button className="light-purple" onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.clicks > 6 && this.state.clicks < 10) {
      return <button className="dark-orange" onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.clicks > 9 && this.state.clicks < 13) {
      return <button className="light-orange" onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.clicks > 12 && this.state.clicks < 16) {
      return <button className="yellow" onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.clicks > 15) {
      return <button className="white">Hot Button</button>;
    }
  }
}
