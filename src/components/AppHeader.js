import React from 'react';
import logo from './logo.svg';

const style = {
  header: {
    backgroundColor: '#222',
    height: '150px',
    padding: '20px',
    color: 'white',
  },
};

const AppHeader = () => (
  <header style={style.header}>
    <img
      src={logo}
      style={{
        animation: 'App-logo-spin infinite 20s linear',
        height: '80px',
      }}
      alt="logo"
    />
    <h1
      style={{
        fontSize: '1.5em',
      }}
    >
      Welcome to React
    </h1>
  </header>
);

export default AppHeader;
