import React from "react";

export const userContext = React.createContext({
  currentUser: null,
  setCurrentUser: () => {},
});