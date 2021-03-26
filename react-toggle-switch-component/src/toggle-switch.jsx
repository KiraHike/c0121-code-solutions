import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { on: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (this.state.on) {
      this.setState({ on: false });
    } else {
      this.setState({ on: true });
    }
  }

  render() {
    if (this.state.on) {
      return (
        <div className="switch off">
          <input className="toggle-switch" htmlType="checkbox" />
          <span className="toggle off" />
          <label htmlFor="toggle-switch" className="switch-label" onClick={this.handleClick}>OFF</label>
        </div>
      );
    }
    return (
        <div className="switch on">
          <input className="toggle-switch" htmlType="checkbox" />
          <span className="toggle on" />
        <label htmlFor="toggle-switch" className="switch-label" onClick={this.handleClick}>ON</label>
      </div>
    );
  }
}
