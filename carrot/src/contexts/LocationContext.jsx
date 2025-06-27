import React, { createContext, useContext, useState } from 'react';

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState('서초동');
  const [price, setPriceFilter] = useState({ minPrice: 0, maxPrice: Number.MAX_VALUE });
  const [filterBadge, setFilter] = useState({}); //filterPric: '', filterCate: ''

  return (
    <LocationContext.Provider value={{ location, setLocation, price, setPriceFilter, filterBadge, setFilter }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => useContext(LocationContext);
