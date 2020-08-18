import { shallow } from 'enzyme';
import { Pagination } from './Pagination';
import React from 'react';

it('expect to render Pagination component', () => {
  const wrapper = shallow(<Pagination />);
  expect(shallow(<Pagination />)).toMatchSnapshot();
});
