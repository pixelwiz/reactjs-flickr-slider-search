import React from 'react';

import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import ConnectedApp, { App } from '../components/App';


const mockStore = configureStore();
const initialState = {
  slider: {
    mainImageIndex: 0,
    pageNum: 1,
    perPage: 4,
  },
};

const store = mockStore(initialState);

describe('App', () => {
  it('should render without crashing', () => {
    shallow(<ConnectedApp store={store} />);
  });
  it('should have class name App', () => {
    const wrapper = shallow(<ConnectedApp store={store} />);
    expect(wrapper.hasClass('App')).toBe(true);
  });
});

/*
import { Provider } from 'react-redux';
import Error from '../components/Error';
import Slider from '../components/Slider';

it('should render without crashing', () => {
    shallow(<App />);
  });
  it('should have class name App', () => {
    const wrapper = shallow(<App store={window.store} />);
    console.log(wrapper.debug());
    expect(wrapper.hasClass('App')).toBe(true);
  });
  it('renders Slider when fetchError is empty', () => {
    const wrapper = mount(<App fetchError="" />);
    expect(wrapper.containsMatchingElement(<Slider />)).toEqual(true);
  });
  it('renders Error when fetchError has a message', () => {
    const wrapper = mount(<App fetchError="Failed" />);
    expect(wrapper.containsMatchingElement(<Error />)).toEqual(true);
  });
*/
