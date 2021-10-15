import React from 'react';
import createPersistedState from 'use-persisted-state';

import { IconButton, Button } from '@material-ui/core';
import { Person } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useTriState = createPersistedState('tri');

const useStyles = makeStyles(theme => {
  const maxWidth = mq => `@media (max-width: ${theme.breakpoints.values[mq]}px)`;
  // const minWidth = mq => `@media (min-width: ${theme.breakpoints.values[mq]}px)`;

  return {
    text: {
      textTransform: 'none',
      marginLeft: theme.spacing(1),
      [maxWidth('sm')]: { display: 'none' },
    },
  };
});

const UserMenu = () => {
  const [tri, setTri] = useTriState();

  const classes = useStyles();

  const handleClick = () => setTri('');

  return (
    <>
      <IconButton
        className={classes.icon}
        onClick={handleClick}
        size="small"
        color="primary"
      >
        <Person />
      </IconButton>

      <Button
        className={classes.text}
        onClick={handleClick}
        color="primary"
      >
        {tri} (changer)
      </Button>
    </>
  );
};

export default UserMenu;
