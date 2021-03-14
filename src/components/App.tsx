import React from 'react';
import 'antd/dist/antd.css';
import {Switch, Route } from 'react-router-dom';
import CategoryList from './CategoryList';
import Joke from './Joke';

function App() {
  return (
      <div className="App">
          <Switch>
              <Route exact path="/" component={CategoryList} />
              <Route path="/joke/:category" component={Joke} />
          </Switch>
      </div>
  );
}

export default App;
