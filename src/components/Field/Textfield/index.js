import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import CssTextField from './styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const CustomizedInputs = ({
  input: { name, onChange, value, ...restInput },
  meta,
  disabled,
  ...rest
}) => {
  const classes = useStyles();

  const { submitError, error, touched, active } = meta;
  const showError = !active && touched && (submitError || error);

  return (
    <div className={classes.root} noValidate style={{ position: 'relative', textAlign: 'right' }}>
      <CssTextField
        className={classes.margin}
        fullWidth
        variant="outlined"
        autoComplete="off"
        disabled={disabled}
        {...rest}
        name={name}
        helperText={showError ? error || submitError : undefined}
        error={showError}
        inputProps={{
          ...restInput,
        }}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

CustomizedInputs.propTypes = {
  disabled: PropTypes.bool,
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    type: PropTypes.string,
    checked: PropTypes.bool,
    multiple: PropTypes.bool,
  }).isRequired,
  meta: PropTypes.shape({
    visited: PropTypes.bool,
    touched: PropTypes.bool,
    active: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    submitError: PropTypes.string,
  }).isRequired,
};

CustomizedInputs.defaultProps = {
  disabled: false,
};

export default memo(CustomizedInputs);
