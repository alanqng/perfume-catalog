import {shallow} from "enzyme";
import App from "./App";
import React from "react";

it('expect to render App component', () => {
    expect(shallow(<App/>)).toMatchSnapshot();
});
