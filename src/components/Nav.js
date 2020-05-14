import piggy from '../porco.png';
import React from 'react';

const Nav = ({ resetHogs, sortHogsBy, toggleFiltered }) => {
  const filterSection = (
    <div>
      <button onClick={ () => sortHogsBy('name')}>sort by name</button>
      <button onClick={ () => sortHogsBy('weight')}> sort by weight</button>
      <button onClick={toggleFiltered}>show greased</button>
      <button onClick={resetHogs}>reset</button>
    </div>
  );

  const navJsx = (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
      {filterSection}
    </div>
  );

  return navJsx;
};

export default Nav;
