import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import TextCard from './TextCard';

describe('<TextCard />', () => {
  const props = {};

  beforeEach(() => {
    props.currentQuote = {
      text: '123',
      src: 'abc'
    };
  });

  it('should render', () => {
    const wrapper = shallow(<TextCard { ...props } />);
    expect(wrapper).to.have.length(1);
  });

  it('should have a card with a specific text and src', () => {
    const wrapper = shallow(<TextCard { ...props } />);
    const h1 = wrapper.find('h1');
    const a = wrapper.find('a');

    expect(h1.text()).to.equal(props.currentQuote.text);
    expect(a.prop('href')).to.equal(props.currentQuote.src);
  });
});
