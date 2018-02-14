import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const DEMO_API_URL = 'http://demo.wp-api.org/wp-json/wp/v2/posts'

class App extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      posts: []
    }
    
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
