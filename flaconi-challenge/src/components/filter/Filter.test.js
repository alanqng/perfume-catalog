import {shallow} from "enzyme";
import {Filter} from "./Filter";
import React from "react";

it('expect to render Filter component', () => {
    const filterTypes = [
        'Paco Rabanne',
        'Lacove',
        'Nautica'
    ]
    expect(shallow(<Filter type={'brand'} title={'Brands'} filterLabels={filterTypes}/>)).toMatchSnapshot();
});
