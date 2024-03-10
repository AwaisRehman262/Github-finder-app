import { createContext, useContext, useState } from "react";

export const UserConext = createContext();

export const UserProvider = ({ children }) => {
  const [login, setLogin] = useState("");
  return (
    <UserConext.Provider value={{ login, setLogin }}>
      {children}
    </UserConext.Provider>
  );
};

export const UseUser = () => {
  return useContext(UserConext);
};
