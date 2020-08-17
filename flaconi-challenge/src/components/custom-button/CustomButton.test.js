import { shallow } from 'enzyme'
import React from 'react'
import { CustomButton } from "./CustomButton";

it('expect to render CustomButton component', () => {
    expect(shallow(<CustomButton/>)).toMatchSnapshot()
})
