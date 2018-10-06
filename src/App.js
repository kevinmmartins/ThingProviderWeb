import React, { Component } from 'react';
import Main from './components/Main';
import Header from './components/Header';
import ThingProviderheader from './components/ThingProviderHeader';

class App extends Component {

  render() {
    return (
      <div id="layout">
        <Header />
        <ThingProviderheader />
        <Main />
      </div>
    );
  }
}

export default App;
