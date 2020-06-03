import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PropTypes from 'prop-types';
import { ptBR } from '@material-ui/core/locale';
import { TextField, createMuiTheme, ThemeProvider } from '@material-ui/core';
import { useStyles } from './styles';

const theme = createMuiTheme(ptBR);

const multiSelect = ({
  input: { name, onChange, value },
  multiple,
  options,
  defaultValue,
  disabled,
  label,
  id,
  meta,
  ...rest
}) => {
  const classes = useStyles;

  const { submitError, error, touched, active } = meta;
  const showError = !active && touched && (submitError || error);
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root} style={{ position: 'relative', textAlign: 'right' }}>
        <Autocomplete
          className={classes.root}
          {...rest}
          name={name}
          multiple={multiple}
          value={value}
          id={id}
          disabled={disabled}
          onChange={(e, i) => {
            onChange(i);
          }}
          options={options || []}
          getOptionLabel={option => option.label}
          filterSelectedOptions
          renderInput={params => (
            <TextField
              {...params}
              variant="outlined"
              label={label}
              placeholder={label}
              fullWidth
              error={showError}
              helperText={showError ? error || submitError : undefined}
            />
          )}
        />
      </div>
    </ThemeProvider>
  );
};
multiSelect.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    type: PropTypes.string,
    checked: PropTypes.bool,
    multiple: PropTypes.bool,
    value: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
  disabled: PropTypes.bool,
  multiple: PropTypes.bool,
  options: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.string]),
  defaultValue: PropTypes.objectOf(PropTypes.func),
  label: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    visited: PropTypes.bool,
    touched: PropTypes.bool,
    active: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    submitError: PropTypes.string,
  }).isRequired,
  id: PropTypes.string.isRequired,
};

multiSelect.defaultProps = {
  disabled: false,
  multiple: false,
  options: null,
  defaultValue: null,
};

export default React.memo(multiSelect);
