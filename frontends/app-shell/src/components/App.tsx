import * as React from 'react';

import { ThemeProvider } from '@material-ui/styles';
import { HashRouter, Switch, Route, useParams, useHistory } from 'react-router-dom';

import { AppFrame } from './AppFrame';
import { theme } from '../utils/theme';
import { CssBaseline, makeStyles, Theme } from '@material-ui/core';
import { CheckoutPage, StartPage, ProductPage, OrdersPage, ProductsPage } from '../remote';
import { initHistory } from 'microfrontend-react';

const useStyles = makeStyles<Theme, { showBorder: boolean }>(() => ({
  '@global': {
    '.remote-component': {
      borderWidth: (props) => (props.showBorder ? 2 : 0),
      borderStyle: 'dashed',
      '&:hover > .remote-component-info': {
        display: (props) => (props.showBorder ? 'block' : 'none'),
      },
    },
    '.remote-component-info': {
      display: 'none',
      position: 'absolute',
      padding: '3px',
      backgroundColor: '#fff',
      color: '#000',
      opacity: 0.8,
      zIndex: 100,
      pointerEvents: 'none',
    },
    '.inspire': {
      borderColor: '#ff0000',
    },
    '.product': {
      borderColor: '#00ff00',
    },
    '.checkout': {
      borderColor: '#0000ff',
    },
  },
}));

export const XRay = React.createContext({ enabled: false, toggle: () => {} });

export const App: React.FC = () => {
  const [xRayEnabled, setXRayEnabled] = React.useState(false);
  useStyles({ showBorder: xRayEnabled });

  return (
    <XRay.Provider value={{ enabled: xRayEnabled, toggle: () => setXRayEnabled((prevValue) => !prevValue) }}>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <CssBaseline />
          <AppContent />
        </HashRouter>
      </ThemeProvider>
    </XRay.Provider>
  );
};

const AppContent: React.FC = () => {
  const history = useHistory();

  React.useEffect(() => {
    initHistory(history);
  }, [history]);

  return (
    <AppFrame>
      <Switch>
        <Route path="/products">
          <ProductsPage />
        </Route>
        <Route path="/product/:productId">
          <ProductPageWrapper />
        </Route>
        <Route path="/checkout/:productId">
          <CheckoutPageWrapper />
        </Route>
        <Route path="/orders">
          <OrdersPage />
        </Route>
        <Route path="/">
          <StartPage />
        </Route>
      </Switch>
    </AppFrame>
  );
};

const ProductPageWrapper: React.FC = () => {
  const params = useParams<{ productId: string }>();
  return <ProductPage productId={params.productId} />;
};

const CheckoutPageWrapper: React.FC = () => {
  const params = useParams<{ productId: string }>();
  return <CheckoutPage productId={params.productId} />;
};
