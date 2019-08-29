import React from 'react';
import logo from '../logo.svg';

const Home = (props) => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Welcome to the Scoutbase Front-end Challenge!
      </p>
      {/* <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a> */}
    </header>
  );
};

export default Home;
