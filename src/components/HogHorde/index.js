import React from 'react';
import HogCard from '../HogCard';

// functional component
const HogHorde = ({ hogsList }) => {
  const hogCards = hogsList.map((hogData) => (
    <HogCard key={hogData.name} hogData={hogData} />
  ));

  return <div className="ui grid container">{hogCards}</div>;
};

export default HogHorde;
