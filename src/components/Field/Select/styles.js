import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    '& .MuiAutocomplete-input': {
      fontFamily: 'arial',
    },
    '& .MuiFormHelperText-root.Mui-error': {
      fontWeight: 600,
    },
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export { useStyles as default, useStyles };
