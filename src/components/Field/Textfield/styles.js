import { memo } from 'react';
import { withStyles, TextField } from '@material-ui/core';

const CssTextField = withStyles({
  root: {
    fontFamily: 'arial',
    '& .MuiInputBase-input': {
      paddingRight: 36,
      fontSize: 14,
      fontFamily: 'arial',
      '&::placeholder': {
        fontFamily: 'arial',
      },
    },
    '& .MuiFormHelperText-root.Mui-error': {
      fontWeight: 600,
      color: 'red',
      fontFamily: 'arial',
    },
    '& .MuiInput-underline': {
      borderBottomColor: 'blue',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'blue',
      },
      '&:hover fieldset': {
        borderColor: 'blue',
      },
    },
    '& .MuiFormLabel-root': {
      fontFamily: 'arial',
    },
    '& .MuiInputLabel-shrink': {
      fontSize: 13,
    },
  },
})(TextField);

export default memo(CssTextField);
