import React from 'react';
import PropTypes from 'prop-types';
import { Drawer, makeStyles } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import { Wrapper, Actions, Icon } from './styles';

const Sidebar = ({ open, close, content, maxWidth, showActions }) => {
  const useStyles = makeStyles(theme => ({
    root: {
      '& .MuiDrawer-paper': {
        maxWidth,
        width: '100%',
        [theme.breakpoints.down('sm')]: {
          maxWidth: '100%',
        },
      },
    },
  }));
  const classes = useStyles();

  const onClose = () => {
    close();
  };

  return (
    <Drawer anchor="right" className={classes.root} open={open} onClose={onClose}>
      <Wrapper>
        {showActions && (
          <Actions>
            <Icon>
              <ClearIcon onClick={onClose} />
            </Icon>
          </Actions>
        )}
        {content}
      </Wrapper>
    </Drawer>
  );
};

Sidebar.propTypes = {
  open: PropTypes.bool,
  close: PropTypes.func.isRequired,
  content: PropTypes.shape({}).isRequired,
  maxWidth: PropTypes.string,
  showActions: PropTypes.bool,
};

Sidebar.defaultProps = {
  open: false,
  showActions: true,
  maxWidth: '35%',
};

export default Sidebar;
