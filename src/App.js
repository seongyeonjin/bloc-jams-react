import React, { Component } from 'react';

import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header>
          <Link to='/'>
          <p class="logo">jPlayer</p>
          {/* <img class="logo" src="./../assets/images/logo.png" alt="Bloc Jams Landing" /> */}
          </Link>
          {/* navigation bar */}
            <nav className="navbar">
            <Link  className="link" to='/'>Home</Link>
              <Link  className="link" to='/library'>Library</Link>
              
            </nav>

        </header>

        <main>
          <Route exact path= "/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
      </div>
    );
  }
}

export default App;
