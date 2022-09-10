import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Item from './Item';
import '../style/home.css';

const ALL = 'all items filter';

const Items = () => {
  const location = useLocation();
  const [state, setState] = location.state === null ? useState({ filter: ALL }) : useState({ filter: location.state.filter });
  const items = useSelector((state) => state.products);

  return (
    <div className="cards-container">
      {items !== undefined ? items.map((item) => {
        if (item.category.name === state.filter) {
          return <Item className="card" key={item.id} title={item.title} price={item.price} images={item.images} id={item.id} description={item.description} />;
        }
        return false;
      }) : false}
    </div>
  );
};

export default Items;
