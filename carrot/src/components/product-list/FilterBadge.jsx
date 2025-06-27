import React, { useEffect, useState } from 'react';
import { useLocation } from '../../contexts/LocationContext';

export default function FilterBadge() {
  const { filterBadge, setFilter } = useLocation();
  const [badge, setBadge] = useState([]);

  useEffect(() => {
    setBadge(Object.values(filterBadge));
  }, [filterBadge]);

  function handleRemove(val) {
    setFilter((prev) => {
      const newFilter = { ...prev };
      for (let key in newFilter) {
        if (newFilter[key] === val) {
          delete newFilter[key];
        }
      }
      return newFilter;
    });
  }

  return (
    <div className='list__filter'>
      {badge.map((v, idx) => {
        return (
          <span className='list__filter__badge' key={idx}>
            {v}{' '}
            <button onClick={() => handleRemove(v)} className='close_btn'>
              X
            </button>
          </span>
        );
      })}
    </div>
  );
}
