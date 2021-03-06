import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import ${NAME} from './';

describe('<${NAME} />', () => {
  function defaultProps() {
    return {};
  }
  it('should always render as a div', () => {
    const props = defaultProps();
    const wrapper = shallow(<${NAME} {...props} />);
    expect(wrapper.type()).to.equal('div');
  });
});
