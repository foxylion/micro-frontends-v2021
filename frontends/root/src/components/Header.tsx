import { AppBar, FormControlLabel, makeStyles, Switch, Tab, Tabs, Toolbar, Typography } from '@material-ui/core';
import * as React from 'react';
import { XRay } from '../App';
import { Logo } from './Logo';

import { history } from 'microfrontend-react';

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: '#fff',
  },
  divider: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    height: '64px',
    borderRight: `1px solid #ccc`,
  },
  logo: {
    marginRight: theme.spacing(2),
  },
  caption: {
    textTransform: 'uppercase',
    fontWeight: 300,
    marginRight: theme.spacing(3),
  },
  spacer: {
    flexGrow: 1,
  },
}));

export const Header: React.FC = () => {
  const classes = useStyles();
  const xRay = React.useContext(XRay);
  return (
    <AppBar position="absolute" color="transparent" elevation={2} className={classes.header}>
      <Toolbar>
        <Logo className={classes.logo} />
        <Typography variant="h5">
          <span>Tractor Store</span>
        </Typography>
        <div className={classes.divider}>&nbsp;</div>

        <Typography variant="h6" className={classes.caption}>
          A Famous Store
        </Typography>

        <Tabs indicatorColor="primary" textColor="primary" value={0}>
          <Tab label="Home" onClick={() => history().push('/')} />
          <Tab label="Products" onClick={() => history().push('/products')} />
          <Tab label="Basket" onClick={() => history().push('/checkout')} />
          <Tab label="My Orders" onClick={() => history().push('/orders')} />
        </Tabs>

        <div className={classes.spacer}>&nbsp;</div>

        <FormControlLabel
          control={<Switch checked={xRay.enabled} onChange={() => xRay.toggle()} color="primary" />}
          label="XRay"
          style={{ float: 'right' }}
        />
      </Toolbar>
    </AppBar>
  );
};
