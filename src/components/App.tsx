import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CharacterList from './character/CharacterList';
import CharacterDetail from './character/CharacterDetail';
import Header from './header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Route exact path='/' component={CharacterList} />
        <Route exact path='/:name' component={CharacterDetail} />
      </Router>
    </div>
  );
}

export default App;
