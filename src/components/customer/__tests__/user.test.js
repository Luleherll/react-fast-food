import React from 'react';
import {mount} from '../../../_tests_/setupEnzyme';
import UserDashboard from '..';
import {food} from '../../../../__mockData__';

describe('UserDashboard', () => {
  it('renders correctly', () => {
    const wrapper = mount(<UserDashboard foodItems={food}/>);
    expect(wrapper.find('.collapsible')).toBeDefined();
  });
});