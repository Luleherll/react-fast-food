import React from 'react';
import {mount} from '../../_tests_/setupEnzyme';
import UserViewTest, {UserView} from '../userView';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {initialState} from '../../../__mockData__';
import userView from '../userView';


const headerOrderButtons = ['#newOrder','#pendingOrder', '#doneOrder'];
let store;
const mockStore = configureStore([thunk]);
const props = {
  actions: {
    getDataThunk: jest.fn(),
    postDataThunk: jest.fn(),
  },
  match: {params: {route: ''}}
};


jest.useFakeTimers();
describe('mainView', () => {
  let wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(<Provider store={store}><UserViewTest {...props}/></Provider>);
    localStorage.setItem('Admin', 'true');
  });

  it('should renders correctly', () => {
    expect(wrapper.find('.collapsible')).toBeDefined();
  });
  
  headerOrderButtons.forEach(button =>(
    it('displayPage is called when order button is clicked', () => {
      wrapper = mount(<UserView {...props} />);
      jest.spyOn(wrapper.instance(), 'displayPage');
      wrapper.find(button).simulate('click');
    })
  ));
  it('navbar items change', () => {
    localStorage.setItem('Admin', 'false');
    expect(wrapper).toMatchSnapshot();
  });
});