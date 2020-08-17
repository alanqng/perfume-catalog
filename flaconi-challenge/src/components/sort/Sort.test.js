import {shallow} from "enzyme";
import {Sort} from "./Sort";
import React from "react";

it('expect to render Sort component', () => {
    expect(shallow(<Sort/>)).toMatchSnapshot();
});
