import React, { Component } from 'react';
import './App.css';

import Section from './components/section';
import HeaderSection from './sections/header';
import WhatSection from './sections/what';
import WhoSection from './sections/who';
import PyconSection from './sections/pycon';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderSection />
        <WhatSection />
        <WhoSection />
        <PyconSection />
      </div>
    );
  }
}

export default App;
