import React from 'react';
import './styles/App.css';
import Main from './components/Main'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Details from './components/Details'

function App() {
  return (

      <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
