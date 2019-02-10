import React from 'react';
import OrderItem from '../OrderItem';
import {mount} from '../../../_tests_/setupEnzyme';
import {initialState} from '../../../../__mockData__';

const { orders: {newOrders, allPendingOrders }} = initialState;
const props = [
  {order: allPendingOrders[0]},
  {order: {...newOrders[0], status: 'Queued'}},
  {order: {...newOrders[0], status: 'Completed'}}
];

describe('OrderItem', () => {
  let wrapper;
  let spy;
  beforeEach(() => {
    wrapper = mount(<OrderItem order={newOrders[0]}/>);
    spy = jest.spyOn(wrapper.instance(), 'viewOrder');
  });
  props.forEach(prop => {
    it('viewOrder should be called with new props', () => {
      wrapper.setProps(prop);
      expect(spy).toBeCalledWith(prop.order.status);
    });
  });
});