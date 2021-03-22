import { Container, makeStyles } from '@material-ui/core';
import * as React from 'react';
import { Header } from './Header';

const useStyles = makeStyles((theme) => ({
  content: {
    margin: 'auto',
    marginTop: theme.spacing(10),
    maxWidth: '1200px',
  },
}));

export const AppFrame: React.FC = (props) => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <Container maxWidth="sm" className={classes.content}>
        <>{props.children}</>
      </Container>
    </>
  );
};
