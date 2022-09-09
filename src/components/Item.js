import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const ALL = 'all items filter';

const Item = () => {
  const location = useLocation();
  const [state, setState] = location.state === null ? useState({ filter: ALL }) : useState({ filter: location.state.filter });

  return (
    <h1>works</h1>
  );
};

export default Item;