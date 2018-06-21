import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import ${ComponentName} from './';

describe('<${ComponentName} />', () => {
  function defaultProps() {
    return {};
  }
  it('should always render as a div', () => {
    const props = defaultProps();
    const wrapper = shallow(<${ComponentName} {...props} />);
    expect(wrapper.type()).to.equal('div');
  });
});
