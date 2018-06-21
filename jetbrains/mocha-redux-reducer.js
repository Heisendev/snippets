import expect from 'expect';
import reducer, { initialState } from './${ReducerName}';

describe('${ReducerName} reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, { type: '' })).to.deep.equal(initialState);
  });
});
