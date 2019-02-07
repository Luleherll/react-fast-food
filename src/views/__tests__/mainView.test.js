import React from 'react';
import {mount} from '../../_tests_/setupEnzyme';
import MainView, {HomeView} from '../mainView';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


let store;
const mockStore = configureStore([thunk]);
const storage = [
  ()=>localStorage.setItem('Admin', 'true'),
  ()=>localStorage.setItem('Admin', 'false'),
  ()=>localStorage.setItem('error', 'test')];
const props = {
  actions: {
    getDataThunk: jest.fn(),
    postDataThunk: jest.fn(),
  },
  history: {push: jest.fn()}
};

jest.useFakeTimers();
describe('mainView', () => {
  let wrapper;
  beforeEach(() => {
    store = mockStore({});
    wrapper = mount(<Provider store={store}><MainView {...props}/></Provider>);
  });

  it('should renders correctly', () => {
    expect(wrapper.find('.space')).toBeDefined();
  });
  storage.forEach(addKey => {
    it('should ', () => {
      addKey();
      wrapper = mount(<HomeView {...props} />);
      jest.spyOn(wrapper.instance(), 'handleSubmit');
      wrapper.find('#submit').simulate('submit');
      jest.runAllTimers();
      wrapper.instance().setState({isLogin: false})
      wrapper.find('#submit').simulate('submit');
    });
  });
  it('handleChange is called when input value changes', () => {
    wrapper = mount(<HomeView {...props} />);
    jest.spyOn(wrapper.instance(), 'handleChange');
    wrapper.find('#password').simulate('change', {target: 'test'});
  });
  it('should display signup fields when create account button is clicked', () => {
    wrapper.find('#signup').simulate('click');
    expect(wrapper.find('#email')).toBeDefined();
    wrapper.find('#signup').simulate('click');
  });
});