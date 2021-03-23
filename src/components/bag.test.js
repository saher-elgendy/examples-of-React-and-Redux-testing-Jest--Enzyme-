import React from 'react';
import { mount } from 'enzyme';
import { mountToJson } from 'enzyme-to-json';
import Bag from './bag';
import './../setupTests';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureStore([]);

describe('BookStore component', () => {
    let wrapper;
    let store;
    let mockProps = {
        bag: []
    }
    beforeEach(() => {
        mockProps = {
            bag: [],
        }

        store = mockStore({
            bag: []
        })
        wrapper = mount(
            <Provider store={store}>
                <Bag {...mockProps} />
            </Provider>
        )
    })

    it('render BookStore component correctly', () => {
        expect(mountToJson(wrapper)).toMatchSnapshot();
    });

    it('toggle bag show when click the bag image', () => {
        const image = wrapper.find('#bag-image')
        image.simulate('click');
        let bagContent = wrapper.find('#bag-content');
        expect(bagContent.exists()).toBeTruthy();
        image.simulate('click');
        bagContent = wrapper.find('#bag-content');
        expect(bagContent.exists()).toBeFalsy();
    })
})