import React, { Component } from 'react';
import Main from './components/Main';
import Header from './components/Header';

class App extends Component {

  render() {
    return (
      <div id="layout">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
