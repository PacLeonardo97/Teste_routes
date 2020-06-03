import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import Textfield from './index';

const ReduxField = ({ label, name, type, ...rest }) => {
  return <Field name={name} {...rest} component={Textfield} type={type} label={label} />;
};

ReduxField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
};

ReduxField.defaultProps = {
  type: 'text',
};

export default ReduxField;
