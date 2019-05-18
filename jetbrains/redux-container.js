import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/**
 * Select props from Redux state.
 * @param {Object} state Current state
 */
function mapStateToProps (state) {
    return {
      ${StateProp}: state.${StateProp},
    }
})

/**
 * Provide dispatch functions in props.
 * @param {Function} dispatch Redux dispatch function
 */
const mapDispatchToProps = {
  ${StateAction},
};

/**
 * ${1:NAME} Component.
 */
export class ${NAME}Component extends Component {
  /**
   * Creates an instance of ${NAME}Component.
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
${NAME}Component.propTypes = {
  ${StateProp}: PropTypes.string,
  ${StateAction}: PropTypes.func,
};
/**
 * ${1:NAME}Component connected.
 */
export default connect(mapStateToProps, mapDispatchToProps)(${NAME}Component);
