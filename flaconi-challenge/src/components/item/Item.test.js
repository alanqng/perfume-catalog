import { shallow } from 'enzyme';
import React from 'react';
import { Item } from './Item';

it('expect to render Item component', () => {
  const item = [
    {
      id: '30103103',
      name: 'Dolce & Gabbana Light Blue Eau de Toilette',
      slug:
        'parfum/dolce-gabbana/light-blue/dolce-gabbana-light-blue-eau-de-toilette.html',
      brand: 'Dolce & Gabbana',
      type: 'Eau de Toilette',
      image:
        'https://cdn.flaconi.de/media/catalog/215x/d/o/dolce-and-gabbana-light-blue-eau-de-toilette-50ml_9.jpg',
      price: 2895,
      size: '25ML',
      rating: 98
    }
  ];
  expect(shallow(<Item item={item} />)).toMatchSnapshot();
});
