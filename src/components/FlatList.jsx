import React from 'react';
import Flat from './Flat';

const FlatLIst = ({
  flats
}) => {
  return (
    <div className="flat-list">
      {
        flats.map(flat => (
          <Flat />))
      }
    </div>
  )
};
