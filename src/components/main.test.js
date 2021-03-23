import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Main from './main';
import './../setupTests';

describe('Main component', () => {
    let wrapper;
    let mockProps;
    let findByText;
    beforeEach(() => {
        mockProps = {
            data: {
                error: null,
                books: [],
                loading: false
            }
        }

        wrapper = shallow(<Main {...mockProps} />)

        findByText = (wrapper, type, text) => {
            return wrapper.findWhere(node => node.type() === type && node.text() === text)
        }

    });

    it('render Main component correctly', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    })

    it('show loading message if loading', () => {
        mockProps = {
            data: {
                ...mockProps.data,
                error: null,
                loading: true
            }
        }

        wrapper = shallow(<Main {...mockProps} />)

        const loadingMessage = findByText(wrapper, 'span', '...loading books')
        expect(loadingMessage.exists()).toBeTruthy()
    })

    it('show error message if something went wrong', () => {
        mockProps = {
            data: {
                ...mockProps.data,
                error: 'something went wrong'
            }
        }

        wrapper = shallow(<Main {...mockProps} />)
        const errorMessage = findByText(wrapper, 'span', 'something went wrong');
        expect(errorMessage.exists()).toBeTruthy();
    })
});