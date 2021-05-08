import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {Header} from './components/Header'
import { SearchRestaurants } from "./components/restaurant/Search";

function App() {
  return (
    <div className="container">
      <header>
        <Header/>
      </header>
      <Router>
        <Switch>
          <Route path="/" component={SearchRestaurants}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
