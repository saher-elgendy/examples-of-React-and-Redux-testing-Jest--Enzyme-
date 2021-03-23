import React from 'react';
import { mount } from 'enzyme';
import { mountToJson } from 'enzyme-to-json';
import BookCard from './bookCard';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import './../setupTests';


const mockStore = configureStore([]);

describe('BookStore component', () => {
    let wrapper;
    let mockProps;
    let store;
   
    beforeEach(() => {
        store = mockStore({
            bag: [],
        })

        mockProps = {
            bag: [],
            book: {},
            addBookToBag: jest.fn(),
            removeBookFromBag: jest.fn()
        }

        wrapper = mount(
            <Provider store={store}>
                <BookCard {...mockProps} />
            </Provider>
        );

    })

    it('render BookCard component correctly', () => {
        expect(mountToJson(wrapper)).toMatchSnapshot();
    })

    it('shows book details correctly', () => {
        mockProps = {
            ...mockProps,
            book: {
                name: 'The secret',
                author: 'Ronda Bayrne',
                pagesNumber: 300,
            }
        }

        wrapper = mount(
            <Provider store={store}>
                <BookCard {...mockProps} />
            </Provider>
        );
        const bookName = wrapper.find('#book-name')
        const author = wrapper.find('#book-author')
        const pageCount = wrapper.find('#page-count')
        expect(bookName.text()).toBe('The secret')
        expect(author.text()).toBe('Author: Ronda Bayrne')
        expect(pageCount.text()).toBe('Page Count: 300')
    });
});