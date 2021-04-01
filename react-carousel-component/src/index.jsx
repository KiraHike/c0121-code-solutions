import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const pictures = [
  {
    id: 1,
    name: 'Pikachu',
    url: '../dist/images/025.png'
  },
  {
    id: 2,
    name: 'Bulbasur',
    url: '../dist/images/001.png'
  },
  {
    id: 3,
    name: 'Charmander',
    url: '../dist/images/004.png'
  },
  {
    id: 4,
    name: 'Squirtle',
    url: '../dist/images/007.png'
  },
  {
    id: 5,
    name: 'Jigglypuff',
    url: '../dist/images/039.png'
  }
];

function App() {
  return <Carousel />;
}

ReactDOM.render(<App />, document.querySelector('#root'));
