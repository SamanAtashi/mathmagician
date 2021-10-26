import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Calculator from './Components/Calculator';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Quote from './Pages/Quote';

const App = () => (
  <>
    <Navbar />
    <Switch>
      <Route path="/calculator">
        <div className="App">
          <h2>Let&apos;s do some Calculation!</h2>
          <Calculator />
        </div>
      </Route>
      <Route path="/quote">
        <Quote />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  </>
);

export default App;
