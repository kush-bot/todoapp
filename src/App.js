import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Header from './Header'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Create from './Create';
import Details from './Details'

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
    <Switch>
      <Route path="/home">
        <Home />
      </Route>
    </Switch>
    <Switch>
      <Route path="/create">
        <Create />
      </Route>
    </Switch>
    <Switch>
      <Route path="/details/:id">
        <Details />
      </Route>
    </Switch>

      
      
    </div>
    </Router>
  );
}

export default App;
