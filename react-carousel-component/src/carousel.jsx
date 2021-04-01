import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: 0 };
  }

  render() {
    return (
      <div className='row'>
        <div className='column'>
          <i className="fas fa-chevron-left" />
        </div>
        <div className='column'>
          <div className='container-img'>
            <img src='../dist/images/025.png' alt='pokemon' />
          </div>
          <div className="container-dots">
            <i className="dot-full fas fa-circle" />
            <i className="dot-open far fa-circle" />
            <i className="dot-open far fa-circle" />
            <i className="dot-open far fa-circle" />
            <i className="dot-open far fa-circle" />
          </div>
        </div>
        <div className='column'>
          <i className="fas fa-chevron-right" />
        </div>
      </div>
    );
  }
}
