import expect from 'expect';
import reducer, { initialState } from './${NAME}';

describe('${NAME} reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, { type: '' })).to.deep.equal(initialState);
  });
});
