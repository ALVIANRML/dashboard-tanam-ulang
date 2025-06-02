import dayjs from 'dayjs';
import React, { createContext, useState, useContext } from 'react';

const ApplicationContext = createContext();

export default function AppContextProvider({ children }) {
  const [loged, setLoged] = useState(''); //Verify User ID
  const [route, setRoute] = useState('dashboard');
  const [userLoged, setUserLoged] = useState(null);

  console.log(userLoged);

  //Handling Route
  const handleRoute = (value) => {
    setRoute(value);
  };

  //Object
  const contextValue = {
    route,
    setRoute,
    setLoged,
    setUserLoged,
    userLoged,
    loged,

    handleRoute,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export const AppContext = ApplicationContext;
