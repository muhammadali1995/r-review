import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";

import { Header } from "./components/Header";
import { SearchRestaurants } from "./components/restaurant/Search";
import { CreateRestaurant } from "./components/restaurant/Create";
import { RegisterUserForm } from "./components/user/Register";

function App() {
  return (
    <div className="container">
      <header>
        <Header />
      </header>
      <Switch>
        <Route path="/create" component={CreateRestaurant}></Route>
        <Route path="/register" component={RegisterUserForm}></Route>
        <Route path="/login">Login</Route>
        <Route path="/" component={SearchRestaurants}></Route>
      </Switch>
    </div>
  );
}

export default App;
