import React from 'react';
import {mount} from '../../../_tests_/setupEnzyme';
import AdminDashboard from '..';
import {orders} from '../../../../__mockData__';

describe('AdminDashboard', () => {
  it('renders correctly', () => {
    const wrapper = mount(<AdminDashboard adminProp={orders}/>);
    expect(wrapper.find('.container')).toBeDefined();
  });
});