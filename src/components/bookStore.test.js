import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import BookStore from './bookStore';
import './../setupTests';


describe('BookStore component', () => {
    let wrapper;
    let mockProps = {
        books: []
    }
    beforeEach(() => {
        wrapper = shallow(<BookStore {...mockProps} />)
    })

    it('render BookStore component correctly', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    })
})