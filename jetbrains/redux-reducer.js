/**
 * ${ReducerName}' reducer initial state.
 * @type {Object}
 */
export const initialState = {
  defaultState
};

/**
 * ${ReducerName}'s reducer.
 * @param {String} state  Existing ${ReducerName}'s state
 * @param {Object} action Action dispatched
 * @return {Object} New state
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case ${ActionName}:
      return ;
    default:
      return state;
  }
};
