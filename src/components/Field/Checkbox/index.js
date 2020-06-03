import React, { useState, useEffect } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const PinkCheckbox = withStyles({
  root: {
    color: '#747474',
    '&$checked': {
      color: '#6E3F8C',
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

const CheckboxWrapper = ({
  checked,
  input: { name, onChange, ...restInput },
  disabled,
  meta,
  ...rest
}) => {
  const [check, setCheck] = useState(false);
  const handleChange = event => setCheck(event.target.checked);

  useEffect(() => {
    setCheck(checked);
  }, [checked]);

  return (
    <PinkCheckbox
      {...rest}
      name={name}
      disabled={disabled}
      checked={check}
      inputProps={{
        ...restInput,
      }}
      onChange={event => handleChange(event)}
    />
  );
};

CheckboxWrapper.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
  }).isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
    submitError: PropTypes.string,
    dirtySinceLastSubmit: PropTypes.bool,
  }).isRequired,
};

CheckboxWrapper.defaultProps = {
  checked: false,
  disabled: false,
};

export default CheckboxWrapper;
