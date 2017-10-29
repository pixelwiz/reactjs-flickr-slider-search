import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';

import { Slider } from '../components/Slider';
import Error from '../components/Error';
// import Slider from '../components/Slider';
import configureStore from '../state/store/configureStore';

const mockStore = {
  slider: {
    mainImageIndex: 0,
    pageNum: 1,
    perPage: 4, // Per supplied requirements
  },
};

describe('Slider', () => {
  it('should render without crashing', () => {
    mount(<Slider {...mockStore} />);
  });
});

/*
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

