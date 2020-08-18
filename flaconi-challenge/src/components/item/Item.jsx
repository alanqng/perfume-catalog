import React from 'react';
import { ItemDiv } from './item.styles';

export const Item = ({ item }) => {

  // Method for striping the brand and type from name
  const getName = (name, brand, type) => {
    if (name) {
      let newName = name.replace(brand, '');
      newName = newName.replace(type, '');
      return newName;
    }
  };

  // Format price
  const getPrice = price => {
    let newPrice = price / 100;
    return newPrice.toString().replace('.', ',') + ' €';
  };

  return (
    <ItemDiv>
      <img src={item.image} alt={item.name} />
      <div className={'item-info'}>
        <h4>{item.brand}</h4>
        <h4>{getName(item.name, item.brand, item.type)}</h4>
        <p>{item.type}</p>
      </div>
      <div className={'price'}>
        <p>
          From {getPrice(item.price)} / {item.size}
        </p>
      </div>
        <div className={'rating'}><span>Rating: </span><b>{item.rating} %</b></div>
    </ItemDiv>
  );
};
