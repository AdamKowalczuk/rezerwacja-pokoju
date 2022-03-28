import './styles/App.scss';
import Main from './components/Main'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Details from './components/Details'
import Login from './components/Login'

function App() {
  return (

      <BrowserRouter>
      <div className="App">
        <Switch>
        <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/main">
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
