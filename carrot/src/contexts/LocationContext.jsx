import React, { createContext, useContext, useState } from 'react';

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState('서초동');
  const [price, setPriceFilter] = useState([0, Number.MAX_VALUE]);

  return (
    <LocationContext.Provider value={{ location, setLocation, price, setPriceFilter }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => useContext(LocationContext);
