import React, { useReducer, createContext } from "react";
import { UserReducer } from "../reducers/UserReducer";

export const UserContext = createContext();

export default ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer);
  
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};