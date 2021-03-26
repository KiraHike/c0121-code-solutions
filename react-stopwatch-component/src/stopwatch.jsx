import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
    this.handleClickPlay = this.handleClickPlay.bind(this);
    this.handleClickPause = this.handleClickPause.bind(this);
    this.handleClickReset = this.handleClickReset.bind(this);
  }

  handleClickPlay() {
    this.intervalID = setInterval(() => {
      this.setState({ seconds: this.state.seconds + 1 });
    }, 1000);
    this.button = 'fas fa-pause';
    this.handle = this.handleClickPause;
    this.resetOption = null;
  }

  handleClickPause() {
    clearInterval(this.intervalID);
    this.button = 'fas fa-play';
    this.handle = this.handleClickPlay;
    this.resetOption = this.handleClickReset;
  }

  handleClickReset() {
    this.setState({ seconds: 0 });
    this.button = 'fas fa-play';
    this.handle = this.handleClickPlay;
    this.resetOption = null;
  }

  render() {
    if (this.state.seconds > 0) {
      return (
        <div className="container">
          <div className="watch" onClick={this.resetOption}>{this.state.seconds}</div>
          <button className={this.button} onClick={this.handle} />
        </div>
      );
    }
    return (
      <div className="container">
        <div className="watch">{this.state.seconds}</div>
        <button className="fas fa-play" onClick={this.handleClickPlay} />
      </div>
    );
  }
}
