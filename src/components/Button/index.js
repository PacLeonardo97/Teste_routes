import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  button: {
    '& .MuiButton-label': {
      fontFamily: 'arial',
    },
    '& .MuiButton-contained.Mui-disabled': {
      fontWeight: '600',
      backgroundColor: '#EAEAEA',
      color: '#747474',
    },
    '& .MuiButton-contained': {
      backgroundColor: '#00FFCB',
      color: 'white',
      height: '35px',
      width: '80%',
      textTransform: 'lowercase',
      marginRight: 16.35,
    },
  },
}));

const StyledButton = ({ disabled, type, text, ...rest }) => {
  const classes = useStyles();
  return (
    <div className={classes.button}>
      <Button size="medium" {...rest} type={type} variant="contained" disabled={disabled}>
        {text}
      </Button>
    </div>
  );
};

StyledButton.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

StyledButton.defaultProps = {
  disabled: false,
  type: 'button',
};

export default StyledButton;
