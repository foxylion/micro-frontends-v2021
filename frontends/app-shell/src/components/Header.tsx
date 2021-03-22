import {
  AppBar,
  Button,
  FormControlLabel,
  makeStyles,
  Switch,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from '@material-ui/core';
import * as React from 'react';
import { XRay } from './App';
import { Logo } from './Logo';

import { history } from 'microfrontend-react';
import { useRouteMatch } from 'react-router';
import { Octocat } from './Octocat';

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

  const homeRoute = useRouteMatch({ path: '/', exact: true });
  const productsRoute = useRouteMatch({ path: '/products', exact: true });
  const productRoute = useRouteMatch({ path: '/product/:product', exact: true });
  const ordersRoute = useRouteMatch({ path: '/orders', exact: true });

  const selectedTab = homeRoute ? 0 : productsRoute || productRoute ? 1 : ordersRoute ? 2 : false;

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

        <Tabs indicatorColor="primary" textColor="primary" value={selectedTab}>
          <Tab label="Home" onClick={() => history().push('/')} />
          <Tab label="Products" onClick={() => history().push('/products')} />
          <Tab label="My Orders" onClick={() => history().push('/orders')} />
        </Tabs>

        <div className={classes.spacer}>&nbsp;</div>

        <FormControlLabel
          control={<Switch checked={xRay.enabled} onChange={() => xRay.toggle()} color="primary" />}
          label="XRay"
        />
        <Button
          startIcon={<Octocat />}
          variant="outlined"
          onClick={() => window.open('https://github.com/foxylion/micro-frontends-v2021')}
        >
          GitHub
        </Button>
      </Toolbar>
    </AppBar>
  );
};
