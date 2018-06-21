import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
/**
 * Select props from Redux state.
 * @param {Object} state Current state
 */
const mapStateToProps = state => ({
  ${StateProp}: state.${StateProp},
});
/**
 * Provide dispatch functions in props.
 * @param {Function} dispatch Redux dispatch function
 */
const mapDispatchToProps = dispatch => ({
  ${StateAction}: () => dispatch({ type: 'action' }),
});
/**
 * ${1:ComponentName} Component.
 */
export class ${ComponentName}Component extends Component {
  /**
   * Creates an instance of ${ComponentName}Component.
   * @param {Object} props Component props
   */
  constructor(props) {
    super(props);
  }
  /**
   * React lifecycle.
   */
  render() {
    return (
      
    );
  }
}
${ComponentName}Component.propTypes = {
  ${StateProp}: PropTypes.string,
  ${StateAction}: PropTypes.func,
};
/**
 * ${1:ComponentName}Component connected.
 */
export default connect(mapStateToProps, mapDispatchToProps)(${ComponentName}Component);
