import * as React from 'react';

import { ThemeProvider } from '@material-ui/styles';
import { HashRouter, Switch, Route, useParams, useHistory } from 'react-router-dom';

import { AppFrame } from './components/AppFrame';
import { theme } from './utils/theme';
import { CssBaseline, makeStyles, Theme } from '@material-ui/core';
import { InspireStartPage, ProductPage } from './remote';
import { initHistory } from 'microfrontend-react';

const useStyles = makeStyles<Theme, { showBorder: boolean }>(() => ({
  '@global': {
    '.remote-component': {
      borderWidth: (props) => (props.showBorder ? 2 : 0),
      borderStyle: 'dashed',
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
        <Route path="/product/:productId">
          <ProductPageWrapper />
        </Route>
        <Route path="/">
          <InspireStartPage />
        </Route>
      </Switch>
    </AppFrame>
  );
};

const ProductPageWrapper: React.FC = () => {
  const params = useParams<{ productId: string }>();
  return <ProductPage productId={params.productId} />;
};
