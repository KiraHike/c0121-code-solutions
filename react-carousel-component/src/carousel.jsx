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

        </div>
        <div className='column'>
          <i className="fas fa-chevron-right" />
        </div>
      </div>
    );
  }
}
