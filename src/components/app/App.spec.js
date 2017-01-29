import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import App from './App';

describe('<App />', () => {
  it('should render', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).to.have.length(1);
  });

  it('should have one less in available quotes after button click', () => {
    const wrapper = shallow(<App />);
    const originalQuotes = wrapper.state('remainingQuotes').length;

    wrapper.find('button').simulate('click');
    expect(wrapper.state('remainingQuotes').length).to.equal(originalQuotes - 1);
  });

  it('should increment button index each click', () => {
    const wrapper = shallow(<App />);
    const btn = wrapper.find('button');
    btn.simulate('click').simulate('click').simulate('click');

    expect(wrapper.state('currentBtnIdx')).to.equal(3);
  });
});
