import React, { createContext, useContext, useState } from 'react';

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState('서초동');

  return <LocationContext.Provider value={{ location, setLocation }}>{children}</LocationContext.Provider>;
};

export const useLocation = () => useContext(LocationContext);
