import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import BookCardbutton from './bookCardButton';
import './../setupTests';


describe('BookStore component', () => {
    let wrapper;
    let mockProps;

    beforeEach(() => {
        mockProps = {
            bag: [],
            book: {},
            addBookToBag: jest.fn(),
            removeBookFromBag: jest.fn()
        }
        wrapper = shallow(<BookCardbutton {...mockProps} />)
    })

    it('render BookStore component correctly', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    })
})