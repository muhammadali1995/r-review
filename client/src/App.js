import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { Route, Switch } from "react-router-dom";
import { Header } from "./components/Header";
import { CreateRestaurant } from "./components/restaurant/Create";
import { RegisterUserForm } from "./components/user/Register";
import { LoginForm } from "./components/user/Login";
import axios from "axios";
import { ENV } from "./utils/constants/env";
import { userContext } from "./context/UserContext";
import { useEffect, useState } from "react";
import { isAdmin, isOwner } from "./roles";
import { Restaurants } from "./components/restaurant/Restaurants";
import { ViewRestaurant } from "./components/restaurant/View";

axios.interceptors.request.use(
  (config) => {
    const { origin } = new URL(config.url);
    const allowedOrigins = [ENV.prod.apiUrl, ENV.development.apiUrl];
    const token = localStorage.getItem("token");
    if (allowedOrigins.includes(origin)) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

function App() {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const value = { currentUser, setCurrentUser };
  useEffect(() => {
    let user = localStorage.getItem("user");
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
  }, []);

  return (
    <userContext.Provider value={value}>
      <div className="container">
        <header>
          <Header />
        </header>
        <Switch>
          <Route path="/" exact component={Restaurants}></Route>

          {!currentUser ? (
            <>
              <Route path="/register" component={RegisterUserForm}></Route>
              <Route path="/login" component={LoginForm}></Route>
            </>
          ) : isAdmin(currentUser) || isOwner(currentUser) ? (
            <>
              <Route path="/create" component={CreateRestaurant}></Route>
              <Route path="/restaurants/:id" component={ViewRestaurant}></Route>
            </>
          ) : (
            ""
          )}
        </Switch>
      </div>
    </userContext.Provider>
  );
}

export default App;
