import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      running: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (!this.state.running && event.target.matches('button')) {
      this.intervalID = setInterval(() => {
        this.setState({ seconds: this.state.seconds + 1 });
      }, 1000);
      this.setState({ running: true });
    } else if (this.state.running && event.target.matches('button')) {
      clearInterval(this.intervalID);
      this.setState({ running: false });
    } else if (!this.state.running && event.target.className === 'watch') {
      this.setState({ seconds: 0 });
      this.setState({ running: false });
    }
  }

  render() {
    this.buttonClass = (this.state.running) ? 'fas fa-pause' : 'fas fa-play';

    return (
      <div className='container' onClick={this.handleClick}>
        <div className='watch'>{this.state.seconds}</div>
        <button className={this.buttonClass}/>
      </div>
    );
  }
}
